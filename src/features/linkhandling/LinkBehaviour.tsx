import { RestoreDefaultActionList } from "@/components/customui/app/link_handling/restore_default_actionlist";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Button } from "@/components/ui/button";
import { restoreDefaultLinkHandling } from "@/redux/app/linkHandlingSlice";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";

export default function LinkBehaviour() {
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);

    const resetLink = () => {
        setLoading(true);
        dispatch(restoreDefaultLinkHandling());
        setTimeout(() => {
            setLoading(false);
            toast.success("Restored to default settings.");
        }, 2000);
    };
    return (
        <div className="py-4 xl:p-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title={
                    <div className="flex flex-col gap-y-2 xl:flex-row xl:items-center xl:justify-between w-full">
                        <span className="font-semibold">Link Behavior</span>
                    </div>
                }
                subTitle="Define rules to control which links open internally within your app, launch within the in-app browser window, or open externally in the device's default browser or app. Rules are applied in order from top to bottom."
            >
                <div className="w-fit m-auto my-4">
                    <Button
                        onClick={resetLink}
                        className="flex items-center gap-2 bg-white text-black hover:border hover:bg-white hover:text-black"
                    >
                        <AiOutlineReload
                            size="1rem"
                            className={`${loading ? "animate-spin" : ""}`}
                        />
                        {loading ? "Restoring Default...." : "Restore Default"}
                    </Button>
                </div>

                <RestoreDefaultActionList />

                {/*  */}
                <div className="w-fit m-auto my-4">
                    <Button className="flex items-center gap-2 bg-white  text-black hover:border hover:bg-white hover:text-black">
                        <AiOutlinePlus size="1.4rem" />
                        Add Rules
                    </Button>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
