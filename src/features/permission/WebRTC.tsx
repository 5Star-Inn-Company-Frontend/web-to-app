import { WebRtcConfigCard } from "@/components/customui/app/app_permission/wenRtcCard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateMediaCamera, updateMediaMicrophone } from "@/redux/app/permissionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export default function WebRTC() {
    const dispatch = useAppDispatch();
    const media = useAppSelector((state: RootState) => state.apps.permission.media);

    const initialValueCamera = media.camera ? "enable" : "disable";
    const initialValueMicrophone = media.microphone ? "enable" : "disable";

    const [enableMicrophone, setEnableMicrophone] = useState(initialValueMicrophone);
    const [enableCamera, setEnableCamera] = useState(initialValueCamera);

    useEffect(() => {
        setEnableCamera(initialValueCamera);
        setEnableMicrophone(initialValueMicrophone);
    }, [initialValueCamera, initialValueMicrophone]);

    const handleChangeEnableCamera = (value: string) => {
        setEnableCamera(value);
        const cameraIsEnabled = value === "enable";

        dispatch(updateMediaCamera(cameraIsEnabled));
    };

    const handleChangeEnableMicrophone = (value: string) => {
        setEnableMicrophone(value);

        const microphoneIsEnabled = value === "enable";

        dispatch(updateMediaMicrophone(microphoneIsEnabled));
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
                            micValue={enableMicrophone}
                            camValue={enableCamera}
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
