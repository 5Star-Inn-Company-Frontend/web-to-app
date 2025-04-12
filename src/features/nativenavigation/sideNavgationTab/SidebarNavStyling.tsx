import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { SideNavigationCard } from "../SideNavigationCard";
import { SideNavigationCard2 } from "../SideNavigationCard2";

export default function SidebarNavStyling() {
    return (
        <TopNavigationCollapsable title="Styling">
            <p className="text-sm text-primary60 mb-6">
                iOS and Android styling is configured independently. The iOS sidebar menu follows
                Apple's Human Interface Guidelines while the Android sidebar menu follows Google
                Material Design principles.
            </p>
            <div className="grid gap-y-5">
                <SideNavigationCard />
                <SideNavigationCard2 />
            </div>
        </TopNavigationCollapsable>
    );
}
