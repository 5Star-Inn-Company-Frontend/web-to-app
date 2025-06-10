import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";

export default function CopyToClipboard({ text }: { text: string }) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("Copied Successfully");
        } catch (error) {
            toast.error("Error");
        }
    };
    return (
        <button onClick={handleCopy} className="cursor-pointer flex justify-end p-1 w-[10%]">
            <MdContentCopy size={15} />
        </button>
    );
}
