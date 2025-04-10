import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateAppTracking } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function AppTracking() {
    const dispatch = useAppDispatch();
    const appTracking = useAppSelector(
        (state: RootState) => state.apps.permission.appTrackingTransparency
    );

    const appTrackingValue = appTracking.ios ? "enable" : "disable";

    const handleChangeAppTracking = (value: string) => {
        const appTrackingIsEnabled = value === "enable";
        dispatch(updateAppTracking(appTrackingIsEnabled));
    };

    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="App Tracking Transparency"
                subTitle="Configure your app to be compliant with Apple's User Privacy and Data Use Policies using the AppTrackingTransparency Framework."
            >
                <div className="xl:w-[50%] px-8">
                    <OsConfigCard
                        os="IOS"
                        value={appTrackingValue}
                        onValueChange={handleChangeAppTracking}
                        radios={[
                            { title: "Disable", label: "disable" },
                            { title: "Enable", label: "enable" },
                        ]}
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
