import { CustomConfigCard } from "@/components/customui/app/web_overides/customcard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";

export default function CustomJavascript() {
    return (
        <div className="p-4 bg-white">
            <CollapsibleComponent
                title="Custom Javascript"
                subTitle={`Enter Custom JavaScript to be injected onto your website pages when they are displayed through your app. For instance, you may find it more convenient to specify JavaScript Bridge commands here rather than adding this code on your website itself. JavaScript added in the top section is injected in both iOS and Android apps or use the platform-specific sections if only needed for one of your apps. Format the JavaScript similar to an external .js file without any HTML or`}
            >
                <div className="grid grid-col-1 gap-8 px-8">
                    <OsConfigCard os="IOS and Android">
                        <CustomConfigCard title="Custom Javascript" />
                    </OsConfigCard>
                    <OsConfigCard os="IOS">
                        <CustomConfigCard title="Custom Javascript" />
                    </OsConfigCard>
                    <OsConfigCard os="Android">
                        <CustomConfigCard title="Custom Javascript" />
                    </OsConfigCard>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
