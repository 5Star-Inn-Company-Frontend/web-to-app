import { updateApp } from "@/api/app";
import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function DashboardHeader() {
    const { id } = useParams();
    const appId = Number(id);

    const currentStoreData = useAppSelector((state: RootState) => state.apps);

    const appData = {
        ...currentStoreData.appState,
        branding: currentStoreData.branding,
        link_handling: currentStoreData.linkHandling,
        interface: currentStoreData.interface,
        website_overide: currentStoreData.websiteOveride,
        permission: currentStoreData.permission,
        navigation: currentStoreData.navigation,
        notification: currentStoreData.notification,
        plugin: {
            social_login: false,
        },
        build_setting: {
            google_service: [],
            development_tools: true,
            app_config: [],
        },
    };

    const { data, mutate, isPending } = useMutation({
        mutationKey: ["app", appId],
        mutationFn: updateApp,
        onSuccess: () => {
            toast.success("App updated successfully");
        },
    });

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
                <Text style="text-xs text-[grey]" value={`Last Saved ${appData.last_saved}`} />

                {isPending ? (
                    <Button disabled className=" text-white bg-[#24243E] p-[0.5rem]">
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
                        Updating...
                    </Button>
                ) : (
                    <Button onClick={handleSubmit} className="bg-black">
                        Done Editing
                    </Button>
                )}
                <button className="border flex items-center justify-center py-2 px-4 rounded-lg">
                    {/* <AiOutlineMore size="1.2rem" /> */}
                    <img src="/3dots2.svg" alt="" className="" />
                </button>
            </div>
        </div>
    );
}
