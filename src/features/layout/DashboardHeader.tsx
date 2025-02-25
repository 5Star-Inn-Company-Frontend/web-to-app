import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
    return (
        <div className="flex justify-between items-center py-4">
            <div className="flex gap-2 items-center text-lg font-semibold">
                <div className="w-11 h-11">
                    <img src="/brandicon.svg" alt="object not found" className="w-full" />
                </div>
                <h1>WebHosting App</h1>
            </div>
            <div className="flex ml-auto gap-4 items-center">
                <Text style="text-xs text-[grey]" value="Last saved 12days ago" />
                <Button className="bg-black">Done Editing</Button>
                <button className="border flex items-center justify-center py-2 px-4 rounded-lg">
                    {/* <AiOutlineMore size="1.2rem" /> */}
                    <img src="/3dots2.svg" alt="" className="" />
                </button>
            </div>
        </div>
    );
}
