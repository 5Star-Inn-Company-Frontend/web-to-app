import { fileUpload } from "@/api/app";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { editorClose, setEditorContent } from "@/redux/editor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { createFile } from "@/utils/fileHandler";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface IEditor {
    editorTitle: string;
    dispatchFn: (data: string) => { type: string; payload: string };
    type: string;
    filename: string;
}

export default function Editor({ editorTitle, dispatchFn, type, filename }: IEditor) {
    const dispatch = useAppDispatch();
    const { isOpen, content } = useAppSelector((state) => state.editor);

    const { isPending, mutate } = useMutation({
        mutationFn: fileUpload,
        onSuccess: (data) => {
            dispatch(dispatchFn(data.url));
            toast.success(`file uploaded successfully!`);
        },
        onError: () => {
            toast.error("Error saving file");
        },
    });

    const handleSave = () => {
        try {
            const file = createFile(content, type, filename);
            mutate(file);
        } catch (error) {
            console.error("Error saving CSS:", error);
        }
    };
    return (
        <Dialog open={isOpen} onOpenChange={() => dispatch(editorClose())}>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>{editorTitle}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Textarea
                        value={content}
                        onChange={(e) => dispatch(setEditorContent(e.target.value))}
                        className="min-h-[300px] font-mono text-sm"
                        placeholder={`Enter your custom ${editorTitle} here...`}
                    />
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => dispatch(editorClose())}>
                            Close
                        </Button>
                        <Button onClick={handleSave} disabled={isPending}>
                            {isPending ? "Saving..." : "Save File"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
