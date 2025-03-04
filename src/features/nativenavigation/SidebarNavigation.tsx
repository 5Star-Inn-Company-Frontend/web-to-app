import Enable from "@/features/nativenavigation/sideNavgationTab/Enable";
import SidebarNavStyling from "@/features/nativenavigation/sideNavgationTab/SidebarNavStyling";
import SidebarNavVisualEditor from "@/features/nativenavigation/sideNavgationTab/SidebarNavVisualEditor";

export function SidebarNavigation() {
    return (
        <>
            <Enable />
            <SidebarNavStyling />
            <SidebarNavVisualEditor />
        </>
    );
}
