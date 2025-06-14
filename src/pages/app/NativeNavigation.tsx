import { Tabs } from "@/components/ui/tabs";
import { TopNavigation } from "../../features/nativenavigation/TopNavigation";
import { SidebarNavigation } from "../../features/nativenavigation/SidebarNavigation";
import { BottomTabBar } from "../../components/nativeNavigation/bottomTabBar/BottomTabBar";
import NavigationHeader from "@/features/nativenavigation/NavigationHeader";
import TabContent from "@/features/nativenavigation/TabContent";
import TabHeader from "@/features/nativenavigation/TabHeader";

const TAB_CONFIG = [
    { value: "Top Navigation Bar", component: TopNavigation },
    { value: "Sidebar Navigation", component: SidebarNavigation },
    { value: "Bottom Tab Bar", component: BottomTabBar },
];

export function NativeNavigation() {
    return (
        <>
            <NavigationHeader />
            <Tabs defaultValue="Top Navigation Bar" className="w-full">
                <TabHeader tabLists={TAB_CONFIG} />
                <TabContent tabs={TAB_CONFIG} />
            </Tabs>
        </>
    );
}
