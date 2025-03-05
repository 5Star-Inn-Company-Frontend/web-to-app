import TopNavigationCollapsable from "../TopNavigationCollapsable";
import SideVisualEditorCard from "../SideVisualEditorCard";

export default function SidebarNavVisualEditor() {
    return (
        <TopNavigationCollapsable title="Side Visual Editor">
            <p className="text-sm text-primary60 mb-6">
                The sidebar visual editor allows you to visually modify icons, labels and links for your Sidebar
                Navigation Menu. Change menu item order and add groupings which expand and collapse. Menu items can be
                added to a group by dragging to the right within the visual editor. Note that icons are optional in
                sidebar menus.
            </p>

            <div className="border border-primary20 p-2 rounded-lg">
                <SideVisualEditorCard />
                <SideVisualEditorCard />
                <SideVisualEditorCard />
                <SideVisualEditorCard />
                <SideVisualEditorCard />
            </div>
        </TopNavigationCollapsable>
    );
}
