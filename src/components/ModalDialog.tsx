import { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface IModalDialog {
    open: boolean;
    onOpenChange: () => void;
    children: ReactNode;
}

export default function ModalDialog({ open, onOpenChange, children }: IModalDialog) {
    return (
        <Dialog onOpenChange={onOpenChange} open={open}>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <DialogHeader>{children}</DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
