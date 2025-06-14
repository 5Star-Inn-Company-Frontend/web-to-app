import { useState } from "react";
import ModalDialog from "@/components/ModalDialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { generateRegexFromUrl } from "@/utils/generate-regex";
import { useAppDispatch } from "@/redux/hook";
import { addLinkBehaviour } from "@/redux/app/linkHandlingSlice";
import toast from "react-hot-toast";

interface IAddLinkBehaviour {
    open: boolean;
    setOpen: () => void;
}

export default function AddLinkBehaviour({ open, setOpen }: IAddLinkBehaviour) {
    const dispatch = useAppDispatch();
    const [mode, setMode] = useState("appbrowser");
    const [label, setLabel] = useState("");
    const [url, setUrl] = useState("");

    const handleModeChange = (value: string) => {
        setMode(value);
    };

    const handleAddRule = () => {
        const newRule = { mode, label, pagesToTrigger: "custom", regex: generateRegexFromUrl(url) };
        dispatch(addLinkBehaviour(newRule));
        toast.success("New Rule Added");
        setOpen();
    };
    // mode: "appbrowser",
    // label: "All Other Links",
    // pagesToTrigger: "all",
    // regex: ".*",
    return (
        <ModalDialog open={open} onOpenChange={setOpen}>
            <div className="grid grid-cols-2 gap-4 min-w-[400px] py-5">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="label">Label</Label>
                    <Input
                        required
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        id="label"
                        placeholder="Google"
                        className="px-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="mode">Mode</Label>
                    <select
                        id="mode"
                        required
                        value={mode}
                        onChange={(e) => handleModeChange(e.target.value)}
                        className="w-full bg-transparent border-gray-200 h-full px-2 py-1 border rounded"
                    >
                        <option value="appbrowser">App Browser</option>
                        <option value="internal">Internal</option>
                        <option value="external">External</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 col-span-2">
                    <Label htmlFor="url">URL</Label>
                    <Input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        id="url"
                        placeholder="https://example.com"
                        className="px-2"
                        required
                        pattern="^https:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9\-._~:/?#\\[\\]@!$&'()*+,;=]*)?$"
                        title="Please enter a valid HTTPS URL"
                    />
                </div>
            </div>
            <Button onClick={handleAddRule}>Add Rule</Button>
        </ModalDialog>
    );
}
