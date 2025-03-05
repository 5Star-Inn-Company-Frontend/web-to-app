import { Text } from "@/components/global/text";

export default function NavigationHeader() {
    return (
        <div className="px-12 py-10 border-b border-primary20 bg-white w-full rounded">
            <Text style="text-4xl font-medium mb-4" value="Native Navigation" />
            <Text
                style="text-sm text-[grey]"
                value="Native Navigation menus allow you to create a natural native
              app experience for users comparable to the most widely used
              and popular iOS and Android apps. Median supports a Top
              Navigation Bar, Sidebar Navigation Menu, Bottom Tab Bar Menu,
              and an iOS a Contextual Navigation Toolbar."
            />
        </div>
    );
}
