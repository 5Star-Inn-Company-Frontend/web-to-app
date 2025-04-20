import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { closeEditorAndroid, setCssContentAndroid } from "@/redux/editor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function EditorAndroid() {
    const dispatch = useAppDispatch();
    const { isOpen, cssContent, isLoading } = useAppSelector((state) => state.editor.android);
    const handleSave = () => {};
    return (
        <Dialog open={isOpen} onOpenChange={() => dispatch(closeEditorAndroid())}>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Custom CSS Editor Android</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Textarea
                        value={cssContent}
                        onChange={(e) => dispatch(setCssContentAndroid(e.target.value))}
                        className="min-h-[300px] font-mono text-sm"
                        placeholder="Enter your custom CSS here..."
                    />
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => dispatch(closeEditorAndroid())}>
                            Cancel
                        </Button>
                        <Button onClick={handleSave} disabled={isLoading}>
                            {isLoading ? "Saving..." : "Save CSS"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
