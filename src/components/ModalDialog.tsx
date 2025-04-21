import { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";

interface IModalDialog {
    open: boolean;
    onOpenChange: () => void;
    children: ReactNode;
}

export default function ModalDialog({ open, onOpenChange, children }: IModalDialog) {
    return (
        <Dialog onOpenChange={onOpenChange} open={open}>
            <DialogContent>
                <DialogHeader>{children}</DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
