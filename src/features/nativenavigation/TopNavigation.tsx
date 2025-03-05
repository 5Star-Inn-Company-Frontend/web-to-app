import DisplayMode from "@/features/nativenavigation/topNavgationTab/DisplayMode";
import TopNavStyling from "@/features/nativenavigation/topNavgationTab/TopNavStyling";
import VisualEditor from "@/features/nativenavigation/topNavgationTab/VisualEditor";

export function TopNavigation() {
    return (
        <>
            <DisplayMode />
            <TopNavStyling />
            <VisualEditor />
        </>
    );
}
