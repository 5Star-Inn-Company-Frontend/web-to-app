import { IoAdd, IoEyeSharp } from "react-icons/io5";

export default function AddPageTitle() {
    return (
        <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-x-4">
                <IoEyeSharp />
                <div className="bg-deepgray px-14 py-3">
                    <p className="text-xs">Page Title</p>
                </div>
                <IoAdd />
            </div>
        </div>
    );
}
