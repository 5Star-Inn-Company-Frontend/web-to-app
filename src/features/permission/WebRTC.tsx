import { WebRtcConfigCard } from "@/components/customui/app/app_permission/wenRtcCard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";

export default function WebRTC() {
    return (
        <div className="px-6 py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="WebRTC Audoi & Video"
                subTitle="You may enable WebRTC permissions within your app to support web-based audio and video applications that use the WebRTC framework. Similar to a standard browser, your app will request microphone and/or camera permission when your WebRTC app requires access."
            >
                <div className="w-1/2 px-8">
                    <OsConfigCard os="Android">
                        <WebRtcConfigCard
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
