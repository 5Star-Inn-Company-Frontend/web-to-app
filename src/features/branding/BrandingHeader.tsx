import { Text } from "@/components/global/text";

export default function BrandingHeader() {
    return (
        <div className="py-2 px-8 xl:px-12 xl:py-10 border-b border-primary20 bg-white w-full rounded">
            <Text style="text-[1.7rem] mb-2 xl:text-4xl font-medium xl:mb-4" value="App Branding" />
            <Text
                style="text-sm text-primary40"
                value="The first step in configuring your app is add an app icon and splash screen, and to select theme colors
                        aligned with your organization"
            />
        </div>
    );
}
