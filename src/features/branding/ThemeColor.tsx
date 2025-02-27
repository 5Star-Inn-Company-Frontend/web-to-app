import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { ThemeColorsCard } from "./themecolorsCard";

export default function ThemeColor() {
    return (
        <div className="px-6 py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Theme Colors"
                subTitle="Set a Primary Color used for text fields and labels, also referred to as the Tint color for iOS and the Accent color for Android."
            >
                <div className="flex flex-col gap-4 px-8">
                    <ThemeColorsCard os="IOS" />
                    {/* <ThemeColorsCard os="Android" /> */}
                </div>
            </CollapsibleComponent>
        </div>
    );
}
