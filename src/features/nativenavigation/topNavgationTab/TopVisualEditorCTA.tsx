import { IoAdd } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TopVisualEditorCTA() {
    return (
        <div className="flex items-center gap-x-6 justify-center my-10">
            <div className="flex items-center gap-x-2 cursor-pointer">
                <RiDeleteBin6Line />
                <span className="text-xs">Clear All</span>
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer">
                <IoAdd />
                <span className="text-xs">Add Top Nav Bar</span>
            </div>
        </div>
    );
}
