import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import "./sidebarNavigation.scss";
import { FaAngleDown } from "react-icons/fa6";
import { Text } from "@/components/global/text";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SideNavigationCard } from "@/features/nativenavigation/SideNavigationCard";
import { SideNavigationCard2 } from "@/features/nativenavigation/SideNavigationCard2";
import { RiDragMove2Fill } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { RiDeleteBin6Line } from "react-icons/ri";
import SideVisualEditorCard from "@/features/nativenavigation/SideVisualEditorCard";

export function SidebarNavigation() {
  return (
    <>
      <Collapsible>
        <CollapsibleTrigger className="w-full flex items-center justify-between mb-4 px-10">
          <Text
            style="text-base font-medium"
            value="Enable"
          />
          <FaAngleDown />
        </CollapsibleTrigger>
        <CollapsibleContent className="border-b border-primary20 px-10 pb-6">

          <p className="text-sm text-primary60 mb-4">
            A Sidebar Navigation Menu is a standard navigation feature that is highly configurable. Users access the navigation menu through a "hamburger" toggle button if a Top Nav Bar is enabled, or by sliding from the left side of the screen. The menu items in the sidebar nav menu can be configured with an optional icon and in collapsible groupings. The sidebar menu items can be configured within the app configuration as well as set dynamically via the JavaScript Bridge
          </p>
          <div>
            <RadioGroup defaultValue="disable" className="inline-flex items-center gap-x-20 p-1 rounded-md border">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disable" id="r1" />
                <Label className="text-xs text-primary40" htmlFor="r1">Disable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enable" id="r2" />
                <Label className="text-xs text-primary40" htmlFor="r2">Enable</Label>
              </div>

            </RadioGroup>
          </div>

        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger className="w-full flex items-center justify-between my-4 px-10">
          <Text
            style="text-base font-medium"
            value="Styling"
          />
          <FaAngleDown />
        </CollapsibleTrigger>
        <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
          <p className="text-sm text-primary60 mb-6">
            iOS and Android styling is configured independently. The iOS sidebar menu follows Apple's Human Interface Guidelines while the Android sidebar menu follows Google Material Design principles.
          </p>
          <div className="grid gap-y-5">

            <SideNavigationCard title="Image" os="IOS" radios={[{ title: "Text", label: "Text" }, { title: "Image", label: "Image" },]} />
            <SideNavigationCard2 os="Android" radios={[{ title: "Disable", label: "Disable" }, { title: "Enable", label: "Enable" },]} />
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="w-full flex items-center justify-between my-4 px-10">
          <Text
            style="text-base font-medium"
            value="Side Visual Editor"
          />
          <div className="flex items-center gap-x-3">
            <span className="block text-xs font-normal">Advanced Mode</span>
            <FaAngleDown />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
          <p className="text-sm text-primary60 mb-6">
            The sidebar visual editor allows you to visually modify icons, labels and links for your Sidebar Navigation Menu. Change menu item order and add groupings which expand and collapse. Menu items can be added to a group by dragging to the right within the visual editor. Note that icons are optional in sidebar menus.
          </p>

          <div className="border border-primary20 p-2 rounded-lg">
            <SideVisualEditorCard />
            <SideVisualEditorCard />
            <SideVisualEditorCard />
            <SideVisualEditorCard />
            <SideVisualEditorCard />
          </div>
        </CollapsibleContent>
      </Collapsible>

    </>
  );
}
