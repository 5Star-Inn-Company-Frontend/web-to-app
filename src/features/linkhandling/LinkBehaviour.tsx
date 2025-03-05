import { RestoreDefaultActionList } from "@/components/customui/app/link_handling/restore_default_actionlist";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";

export default function LinkBehaviour() {
    return (
        <div className="p-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title={
                    <div className="flex items-center justify-between w-full">
                        <span className="text-md font-semibold">Link Behavior</span>
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="airplane-mode" className="font-semibold text-sm">
                                Advance mode
                            </Label>
                            <Switch id="airplane-mode" />
                        </div>
                    </div>
                }
                subTitle="Define rules to control which links open internally within your app, launch within the in-app browser window, or open externally in the device's default browser or app. Rules are applied in order from top to bottom."
            >
                <div className="w-fit m-auto my-4">
                    <Button className="flex items-center gap-2 bg-white text-black hover:border hover:bg-white hover:text-black">
                        <AiOutlineReload size="1.4rem" />
                        Restore Default
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
