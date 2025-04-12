import TopNavigationCollapsable from "../TopNavigationCollapsable";
import SideVisualEditorCard from "../SideVisualEditorCard";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function SidebarNavVisualEditor() {
    const visualEditor = useAppSelector(
        (state: RootState) => state.apps.navigation.sidebarNavigationBar.sidebarItems.menus
    );

    const visualEditorItems = visualEditor[0].items;
    return (
        <TopNavigationCollapsable title="Side Visual Editor">
            <p className="text-sm text-primary60 mb-6">
                The sidebar visual editor allows you to visually modify icons, labels and links for
                your Sidebar Navigation Menu. Change menu item order and add groupings which expand
                and collapse. Menu items can be added to a group by dragging to the right within the
                visual editor. Note that icons are optional in sidebar menus.
            </p>

            <div className="border border-primary20 p-2 rounded-lg">
                {visualEditorItems.map((items, id) => {
                    return <SideVisualEditorCard key={id} label={items.label} url={items.url} />;
                })}
            </div>
        </TopNavigationCollapsable>
    );
}
