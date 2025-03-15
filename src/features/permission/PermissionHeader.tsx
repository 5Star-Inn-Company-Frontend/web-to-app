import { Text } from "@/components/global/text";

export default function PermissionHeader() {
    return (
        <div className="px-6 py-5 xl:px-12 xl:py-10 border-b border-primary20 bg-white w-full rounded">
            <Text style="text-[1.7rem] xl:text-4xl font-medium mb-4" value="App Permission" />
            <Text
                style="text-sm text-[grey]"
                value="Some device hardware and functionality requires specific permissions from the user to access within your app. At times, permission requirements can be configured to be prompted when the app is first opened or they can be prompted when required at runtime via the JavaScript Bridge."
            />
        </div>
    );
}
