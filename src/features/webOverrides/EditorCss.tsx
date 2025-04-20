import { fileUpload } from "@/api/app";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { updateCustomCssIos } from "@/redux/app/websiteOverideSlice";
import { closeEditor, setCssContent, setLoading } from "@/redux/editor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { createCssFile } from "@/utils/fileHandler";
import { useMutation } from "@tanstack/react-query";

export default function EditorCss() {
    const dispatch = useAppDispatch();
    const { isOpen, cssContent } = useAppSelector((state) => state.editor.ios);

    console.log(cssContent);

    const { isPending, mutate } = useMutation({
        mutationFn: fileUpload,
        onSuccess: (data) => {
            dispatch(updateCustomCssIos(data));
        },
    });

    const handleSave = () => {
        dispatch(setLoading(isPending));
        try {
            const cssFile = createCssFile(cssContent, "text/css", "custom-css-ios.css");
            mutate(cssFile);
        } catch (error) {
            console.error("Error saving CSS:", error);
        } finally {
            dispatch(setLoading(isPending));
        }
    };
    return (
        <Dialog open={isOpen} onOpenChange={() => dispatch(closeEditor())}>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Custom CSS Editor IOS</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Textarea
                        value={cssContent}
                        onChange={(e) => dispatch(setCssContent(e.target.value))}
                        className="min-h-[300px] font-mono text-sm"
                        placeholder="Enter your custom CSS here..."
                    />
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => dispatch(closeEditor())}>
                            Cancel
                        </Button>
                        <Button onClick={handleSave} disabled={isPending}>
                            {isPending ? "Saving..." : "Save CSS"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
