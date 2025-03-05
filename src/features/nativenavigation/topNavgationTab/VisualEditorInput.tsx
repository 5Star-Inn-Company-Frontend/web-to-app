import { Input } from "@/components/ui/input";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function VisualEditorInput() {
    return (
        <div className="border border-primary20 p-2 rounded-lg">
            <div className="flex items-center gap-x-5 bg-deepgray p-2 rounded-md">
                <Input className="p-1 bg-deepgray border-primary40" placeholder="Top Nav Bar Menu 1 - All Pages" />
                <div className="flex items-center gap-x-2">
                    <IoIosCheckmarkCircle />
                    <IoCopyOutline />
                    <RiDeleteBin6Line />
                </div>
            </div>
        </div>
    );
}
