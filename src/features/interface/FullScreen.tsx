import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateFullScreen } from "@/redux/app/interfaceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";

export default function FullScreen() {
    const dispatch = useAppDispatch();
    const fullScreen = useAppSelector((state: RootState) => state.apps.interface.full_screen);

    const initialValue = useMemo(() => (fullScreen ? "enable" : "disable"), [fullScreen]);
    const [enableFullScreen, setEnableFullScreen] = useState(initialValue || "disable");

    useEffect(() => {
        setEnableFullScreen(initialValue);
    }, [initialValue]);

    const handleChangeFullScreen = (newvalue: string) => {
        setEnableFullScreen(newvalue);
        const fullScreenIsEnabled = newvalue === "enable";
        dispatch(updateFullScreen(fullScreenIsEnabled));
    };

    return (
        <div className="p-4 pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Full Screen"
                subTitle="Control whether your app is displayed in full screen. This mode can also be set at runtime from your website using the JavaScript Bridge. Note that on Android when full screen mode enabled the keyboard will overlay on top of your web content which can cause issues for users completing forms."
            >
                <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    <OsConfigCard
                        os="IOS"
                        value={enableFullScreen}
                        onValueChange={handleChangeFullScreen}
                        radios={[
                            { title: "Disable", label: "disable" },
                            { title: "Enable", label: "enable" },
                        ]}
                    />
                    <OsConfigCard
                        os="Android"
                        value={enableFullScreen}
                        onValueChange={handleChangeFullScreen}
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
