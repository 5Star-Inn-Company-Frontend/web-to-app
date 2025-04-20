import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";

interface IEditorJavaScript {
    content: string;
    onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleSave: () => void;
    loading: boolean;
    isOpen: boolean;
    toggleEditor: () => void;
}

export default function EditorJavaScript({
    content,
    onChangeContent,
    handleSave,
    loading,
    isOpen,
    toggleEditor,
}: IEditorJavaScript) {
    return (
        <Dialog open={isOpen} onOpenChange={toggleEditor}>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Custom CSS Editor IOS</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Textarea
                        value={content}
                        onChange={onChangeContent}
                        className="min-h-[300px] font-mono text-sm"
                        placeholder="Enter your custom CSS here..."
                    />
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={toggleEditor}>
                            Cancel
                        </Button>
                        <Button onClick={handleSave} disabled={loading}>
                            {loading ? "Saving..." : "Save CSS"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
