import { WebRtcConfigCard } from "@/components/customui/app/app_permission/wenRtcCard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateWebRtc } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function WebRTC() {
    const dispatch = useAppDispatch();
    const webRtc = useAppSelector((state: RootState) => state.apps.permission.webRtc);

    const webRtcCamera = webRtc.android.cameraActive ? "enable" : "disable";
    const webRtcMicrophone = webRtc.android.microphoneActive ? "enable" : "disable";

    const handleChangeEnableCamera = (value: string) => {
        const cameraIsEnabled = value === "enable";
        console.log({ ...webRtc.android, cameraActive: cameraIsEnabled });
        dispatch(updateWebRtc({ ...webRtc.android, cameraActive: cameraIsEnabled }));
    };

    const handleChangeEnableMicrophone = (value: string) => {
        const microphoneIsEnabled = value === "enable";
        dispatch(updateWebRtc({ ...webRtc.android, microphoneActive: microphoneIsEnabled }));
    };

    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="WebRTC Audoi & Video"
                subTitle="You may enable WebRTC permissions within your app to support web-based audio and video applications that use the WebRTC framework. Similar to a standard browser, your app will request microphone and/or camera permission when your WebRTC app requires access."
            >
                <div className="xl:w-1/2 px-8">
                    <OsConfigCard os="Android">
                        <WebRtcConfigCard
                            onCamValueChange={handleChangeEnableCamera}
                            onMicValueChange={handleChangeEnableMicrophone}
                            micValue={webRtcMicrophone}
                            camValue={webRtcCamera}
                            radios={[
                                { title: "Disable", label: "disable" },
                                { title: "Enable", label: "enable" },
                            ]}
                        />
                    </OsConfigCard>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
