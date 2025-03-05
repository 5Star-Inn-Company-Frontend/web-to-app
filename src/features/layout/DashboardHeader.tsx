import { updateApp } from "@/api/app";
import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function DashboardHeader() {
    const { id } = useParams();
    const appId = Number(id);

    const appData = useAppSelector((state: RootState) => state.app);

    const { data, mutate } = useMutation({
        mutationKey: ["app", appId],
        mutationFn: updateApp,
    });

    // console.log(appData);

    const handleSubmit = () => {
        mutate({ appData, appId });
    };

    console.log(data);

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
                <Button onClick={handleSubmit} className="bg-black">
                    Done Editing
                </Button>
                <button className="border flex items-center justify-center py-2 px-4 rounded-lg">
                    {/* <AiOutlineMore size="1.2rem" /> */}
                    <img src="/3dots2.svg" alt="" className="" />
                </button>
            </div>
        </div>
    );
}
