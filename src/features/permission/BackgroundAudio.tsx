import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateBackgroundAudio } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function BackgroundAudio() {
    const dispatch = useAppDispatch();
    const backgroundAudio = useAppSelector(
        (state: RootState) => state.apps.permission.backgroundAudio
    );

    const backgroundAudioIos = backgroundAudio.ios ? "enable" : "disable";

    const handleChangeBackgroundAudio = (value: string) => {
        const isBackgroundAudioEnabled = value === "enable";
        dispatch(updateBackgroundAudio(isBackgroundAudioEnabled));
    };
    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Background Audio"
                subTitle="Background audio permission on iOS allows audio from the app to be played while the app is minimized or backgrounded. Use the Median JavaScript Bridge to start and stop the background audio service to make use of this feature."
            >
                <div className="xl:w-1/2 px-8">
                    <OsConfigCard
                        os="Android"
                        value={backgroundAudioIos}
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
