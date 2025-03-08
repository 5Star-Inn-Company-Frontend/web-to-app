import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateAppTracking } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export default function AppTracking() {
    const dispatch = useAppDispatch();
    const appTracking = useAppSelector(
        (state: RootState) => state.apps.permission.app_tracking_transparency
    );

    const initialValue = appTracking ? "enable" : "disable";
    const [enableAppTracking, setEnableAppTracking] = useState(initialValue);

    useEffect(() => {
        setEnableAppTracking(initialValue);
    }, [initialValue]);

    const handleChangeAppTracking = (value: string) => {
        setEnableAppTracking(value);
        const appTrackingIsEnabled = value === "enable";
        dispatch(updateAppTracking(appTrackingIsEnabled));
    };

    return (
        <div className="px-6 py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="App Tracking Transparency"
                subTitle="Configure your app to be compliant with Apple's User Privacy and Data Use Policies using the AppTrackingTransparency Framework."
            >
                <div className="w-[50%] px-8">
                    <OsConfigCard
                        os="IOS"
                        value={enableAppTracking}
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
