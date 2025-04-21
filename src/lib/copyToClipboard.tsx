import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

interface ICopyButton {
    textToCopy: string;
}

export function CopyButton({ textToCopy }: ICopyButton) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    return (
        <Button
            onClick={handleCopy}
            className={`flex justify-center w-full items-center gap-4 border mb-3 transition-colors duration-200 ${
                isCopied
                    ? "bg-black text-white border-black" // Copied state
                    : "bg-white hover:text-white text-black border-black hover:bg-black" // Default state
            }`}
        >
            <MdContentCopy size="1.4rem" />
            {isCopied ? "Copied to clipboard!" : "Copy download link to clipboard"}
        </Button>
    );
}
