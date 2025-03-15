import { Text } from "@/components/global/text";

export default function WebOverridesHeading() {
    return (
        <div className="px-8 py-6 xl:px-12 xl:py-10 border-b border-primary20 bg-white w-full rounded">
            <Text style="text-[1.7rem] xl:text-4xl font-medium mb-4" value="Website Overides" />
            <Text
                style="text-sm text-[grey]"
                value="Web Overrides allow you to control how your website is presented within your app and how your app sends requests to your web server."
            />
        </div>
    );
}
