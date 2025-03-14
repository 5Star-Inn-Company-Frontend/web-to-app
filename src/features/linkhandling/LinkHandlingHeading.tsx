import { Text } from "@/components/global/text";

export default function LinkHandlingHeading() {
    return (
        <div className="px-6 py-6 xl:px-12 xl:py-10 border-b border-primary20 bg-white w-full rounded">
            <Text style="text-[1.7rem] xl:text-4xl font-medium mb-4" value="Link Handling" />
            <Text
                style="text-sm text-[grey]"
                value="Link handling settings control how links on pages are displayed within your app when they are opened. You can also configure deep linking to set links pointing to your website in text messages, emails and on other webpages to open within your app."
            />
        </div>
    );
}
