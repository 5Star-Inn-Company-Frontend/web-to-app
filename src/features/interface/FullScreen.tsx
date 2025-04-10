import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateFullScreen } from "@/redux/app/interfaceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";

export default function FullScreen() {
    const dispatch = useAppDispatch();
    const fullScreen = useAppSelector((state: RootState) => state.apps.interface.fullScreen);

    const initialValueIos = useMemo(
        () => (fullScreen.ios ? "enable" : "disable"),
        [fullScreen.ios]
    );
    const initialValueAndroid = useMemo(
        () => (fullScreen.android ? "enable" : "disable"),
        [fullScreen.android]
    );
    const [enableFullScreenIos, setEnableFullScreenIos] = useState(initialValueIos || "disable");
    const [enableFullScreenAndroid, setEnableFullScreenAndroid] = useState(
        initialValueAndroid || "disable"
    );

    useEffect(() => {
        setEnableFullScreenIos(initialValueIos);
        setEnableFullScreenAndroid(initialValueAndroid);
    }, [initialValueIos, initialValueAndroid]);

    const handleEnableFullScreenIos = (value: string) => {
        setEnableFullScreenIos(value);
        const fullScreenIsEnabled = value === "enable";
        dispatch(updateFullScreen({ ...fullScreen, ios: fullScreenIsEnabled }));
    };
    const handleEnableFullScreenAndroid = (value: string) => {
        setEnableFullScreenAndroid(value);
        const fullScreenIsEnabled = value === "enable";
        dispatch(updateFullScreen({ ...fullScreen, android: fullScreenIsEnabled }));
    };

    return (
        <div className="pt-2 pb-5 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Full Screen"
                subTitle="Control whether your app is displayed in full screen. This mode can also be set at runtime from your website using the JavaScript Bridge. Note that on Android when full screen mode enabled the keyboard will overlay on top of your web content which can cause issues for users completing forms."
            >
                <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    <OsConfigCard
                        os="IOS"
                        value={enableFullScreenIos}
                        onValueChange={handleEnableFullScreenIos}
                        radios={[
                            { title: "Disable", label: "disable" },
                            { title: "Enable", label: "enable" },
                        ]}
                    />
                    <OsConfigCard
                        os="Android"
                        value={enableFullScreenAndroid}
                        onValueChange={handleEnableFullScreenAndroid}
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
