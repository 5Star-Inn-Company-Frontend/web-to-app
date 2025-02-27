import { Text } from "@/components/global/text";

export default function WebOverridesHeading() {
    return (
        <div className="px-12 py-10 border-b border-primary20 bg-white w-full rounded">
            <Text style="text-4xl font-medium mb-4" value="Website Overides" />
            <Text
                style="text-sm text-[grey]"
                value="Web Overrides allow you to control how your website is presented within your app and how your app sends requests to your web server."
            />
        </div>
    );
}
