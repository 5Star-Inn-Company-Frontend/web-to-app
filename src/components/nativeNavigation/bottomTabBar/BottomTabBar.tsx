import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Text } from "@/components/global/text";
import { FaAngleDown } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { BottomTopBarStylingCard } from "@/features/nativenavigation/BottomTopBarStylingCard";
import { BottomTopBarStylingCard2 } from "@/features/nativenavigation/BottomTopBarStylingCard2";

export function BottomTabBar() {
    return (
        <>
            <Collapsible>
                <CollapsibleTrigger className="w-full flex items-center justify-between mb-4 px-10">
                    <Text
                        style="text-base font-medium"
                        value="Default Mode"
                    />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">

                    <p className="text-sm text-primary60 mb-4">
                        A Bottom Tab Bar menu is the most common native navigation menu component.
                        You can configure your app with multiple tab bar menus to show on different pages
                        and define optional icons and labels for each menu. You can also set and control
                        the tab menu at runtime from your website using the JavaScript Bridge.
                    </p>
                    <div>
                        <RadioGroup defaultValue="disable" className="inline-flex items-center gap-x-20 p-1 rounded-md border">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="disable" id="r1" />
                                <Label className="text-xs text-primary40" htmlFor="r1">Hidden</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="enable" id="r2" />
                                <Label className="text-xs text-primary40" htmlFor="r2">Active</Label>
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
                      <BottomTopBarStylingCard os="IOS"/>
                      <BottomTopBarStylingCard2 os="Android"/>
                    </CollapsibleContent>
                  </Collapsible>
        </>
    )
};