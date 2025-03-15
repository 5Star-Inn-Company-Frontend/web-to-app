import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { StatusbarCard } from "@/features/branding/statusbarcard";

export default function StatusBar() {
    return (
        <div className="pb-4 xl:p-4 bg-white mb-16 ">
            <CollapsibleComponent
                title="Status Bar"
                subTitle="Set default styling options and Light/Dark mode for the device status bar while your app is open. When the status bar is in Light mode it will display with black text, in Dark mode white text, in Auto mode it will follow the device Light/Dark mode setting. You may also customize and dynamically set the status bar visibility and style during runtime from your website using the Median Javascript Bridge."
            >
                <div className="flex flex-col gap-4 px-8">
                    <StatusbarCard os="IOS" />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
