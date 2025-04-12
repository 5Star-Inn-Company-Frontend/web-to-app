import { BottomTopBarStylingCard } from "../BottomTopBarStylingCard";
import { BottomTopBarStylingCard2 } from "../BottomTopBarStylingCard2";
import TopNavigationCollapsable from "../TopNavigationCollapsable";

export default function BottomNavStyling() {
    return (
        <TopNavigationCollapsable title="Styling">
            <p className="text-sm text-primary60 mb-6">
                iOS and Android styling is configured independently. The iOS sidebar menu follows
                Apple's Human Interface Guidelines while the Android sidebar menu follows Google
                Material Design principles.
            </p>
            <BottomTopBarStylingCard />
            <BottomTopBarStylingCard2 os="Android" />
        </TopNavigationCollapsable>
    );
}
