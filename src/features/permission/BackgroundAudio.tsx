import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updatePermission } from "@/redux/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useState } from "react";

export default function BackgroundAudio() {
    const dispatch = useAppDispatch();
    const backgroundAudio = useAppSelector((state: RootState) => state.app.permission.background_audio);

    const initialValue = backgroundAudio ? "enable" : "disable";
    const [enableBackgroundAudio, setEnableBackgroundAudio] = useState(initialValue);

    const handleChangeBackgroundAudio = (value: string) => {
        setEnableBackgroundAudio(value);
        const isBackgroundAudioEnabled = value === "enable";
        dispatch(updatePermission({ background_audio: isBackgroundAudioEnabled }));
    };
    return (
        <div className="px-6 py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Background Audio"
                subTitle="Background audio permission on iOS allows audio from the app to be played while the app is minimized or backgrounded. Use the Median JavaScript Bridge to start and stop the background audio service to make use of this feature."
            >
                <div className="w-1/2 px-8">
                    <OsConfigCard
                        os="Android"
                        value={enableBackgroundAudio}
                        onValueChange={handleChangeBackgroundAudio}
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

/* 


*/
