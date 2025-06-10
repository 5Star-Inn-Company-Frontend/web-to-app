import { LucideLoader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full my-10">
            <LucideLoader2 size={32} className="animate-spin text-gray-500" />
        </div>
    );
}
