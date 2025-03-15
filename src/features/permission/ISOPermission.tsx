import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { Input } from "@/components/ui/input";

export default function ISOPermission() {
    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-4 bg-white mb-10">
            <CollapsibleComponent
                title="ISO Permission Description"
                subTitle="Apple requires permission descriptions that accurately represent how your app uses device functionality. Update the defaults when necessary to reflect your specific use case."
            >
                <div className="grid gap-y-5 px-8">
                    <OsConfigCard os="IOS">
                        <div className="px-2 pt-2">
                            <Input
                                type="text"
                                className="border rounded-md w-full p-2 border-primary40"
                                value="WebhostingApp needs access to your location to customize your app experience."
                            />
                        </div>
                    </OsConfigCard>
                    <OsConfigCard os="IOS">
                        <div className="px-2 pt-2">
                            <Input
                                type="text"
                                className="border rounded-md w-full p-2 border-primary40"
                                value="WebhostingApp needs access to your location to customize your app experience."
                            />
                        </div>
                    </OsConfigCard>
                    <OsConfigCard os="IOS">
                        <div className="px-2 pt-2">
                            <Input
                                type="text"
                                className="border rounded-md w-full p-2 border-primary40"
                                value="WebhostingApp needs access to your location to customize your app experience."
                            />
                        </div>
                    </OsConfigCard>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
