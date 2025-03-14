import { Text } from "@/components/global/text";

export default function InterfaceHeading() {
    return (
        <div className="px-6 py-6 xl:px-12 xl:py-10 border-b border-primary20 bg-white w-full rounded">
            <Text style="text-[1.7rem] xl:text-4xl font-medium mb-4" value="App Interface" />
            <Text
                style="text-sm text-[grey]"
                value="App Interface settings control the functionality of your app, allowing you to optimize the app versus website experience for your users."
            />
        </div>
    );
}
