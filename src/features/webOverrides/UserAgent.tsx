import { UserAgentConfigCard } from "@/features/webOverrides/user_agentcard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";

export default function UserAgent() {
    return (
        <div className="pb-5 pt-2 xl:px-6 xl:py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="User Agent"
                subTitle={`By default, a string is appended to the end of the device user agent so that you can identify requests originating from your app versus a standard mobile browser. You may choose to customize the string that is appended or provide a complete custom user agent to be used as a replacement instead of the device default user agent. Note that for apps initially created on GoNative.io the default string that is appended includes "gonative" while newer apps include "median".`}
            >
                <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    <OsConfigCard os="IOS">
                        <UserAgentConfigCard />
                    </OsConfigCard>
                    <OsConfigCard os="Android">
                        <UserAgentConfigCard />
                    </OsConfigCard>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
