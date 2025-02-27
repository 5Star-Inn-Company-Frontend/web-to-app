import { WebRtcConfigCard } from "@/components/customui/app/app_permission/wenRtcCard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { RootState } from "@/redux/store";
import { useState } from "react";

export default function WebRTC() {
    // const dispatch = useAppDispatch();
    // const media = useAppSelector((state: RootState) => state.app.permission.media);

    // const initialValue = {microphone: med}
    const [enableMicrophone, setEnableMicrophone] = useState("disable");
    const [enableCamera, setEnableCamera] = useState("disable");

    // const [enableMedia, setEnableMedia] = useState({ microphone: "disable", camera: "disable" });

    const handleChangeEnableCamera = (value: string) => {
        setEnableCamera(value);
    };

    const handleChangeEnableMicrophone = (value: string) => {
        setEnableMicrophone(value);
    };

    return (
        <div className="px-6 py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="WebRTC Audoi & Video"
                subTitle="You may enable WebRTC permissions within your app to support web-based audio and video applications that use the WebRTC framework. Similar to a standard browser, your app will request microphone and/or camera permission when your WebRTC app requires access."
            >
                <div className="w-1/2 px-8">
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
