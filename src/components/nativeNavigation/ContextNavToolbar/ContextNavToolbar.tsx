import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Text } from "@/components/global/text";
import { FaAngleDown, FaApple } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SwitchDemo } from "@/components/Switch";

export function ContextNavToolbar() {
    return (
        <>
            <Collapsible >
                <CollapsibleTrigger className="w-full flex items-center justify-between mb-4 px-10">
                    <Text
                        style="text-base font-medium"
                        value="Enable"
                    />
                    <div className="flex items-center gap-x-5">
                        <SwitchDemo text="Advanced Mode" />
                        <FaAngleDown />
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <p className="text-sm text-primary60 mb-4">
                        Unlike Android devices iPhones and iPads do not have a built-in back button, which can make navigating your website from within your app challenging.
                        This feature provides a native navigation toolbar that shows on the bottom of the device screen dependent on navigation history and page URL.
                        By default, the toolbar will include a Back button but it can be customized to also show with Forward and Refresh buttons.
                    </p>
                    <div className="border border-primary40 rounded-lg">
                        <div className="flex items-center gap-x-1 px-4 py-2 border-b border-primary40 ">
                            <FaApple />
                            <span className="text-sm">IOS</span>
                        </div>
                        <div className="px-4 py-3">

                            <RadioGroup defaultValue="disable" className="inline-flex items-center gap-x-20 p-1 rounded-md border">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="disable" id="r1" />
                                    <Label className="text-xs text-primary40" htmlFor="r1">Auto</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="enable" id="r2" />
                                    <Label className="text-xs text-primary40" htmlFor="r2">Always</Label>
                                </div>

                            </RadioGroup>
                        </div>
                    </div>

                </CollapsibleContent>
            </Collapsible>
            <Collapsible >
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text
                        style="text-base font-medium"
                        value="Toolbar visibility by Pages"
                    />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <RadioGroup defaultValue="disable" className="inline-flex items-center gap-x-20 p-1 rounded-md border">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">All Pages</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">Specific Pages</Label>
                        </div>
                    </RadioGroup>

                </CollapsibleContent>
            </Collapsible>
            <Collapsible>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text
                        style="text-base font-medium"
                        value="Black Button Configuration"
                    />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <Text
                        style="mb-3 font-medium"
                        value="Label"
                    />
                    <RadioGroup defaultValue="disable" className="inline-flex items-center gap-x-20 p-1 rounded-md border">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">No Text</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">Default Text</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">Custom Text</Label>
                        </div>
                    </RadioGroup>
                    <Text
                        style="my-3 font-medium"
                        value="Pages to Activate Button"
                    />
                    <RadioGroup defaultValue="disable" className="inline-flex items-center gap-x-20 p-1 rounded-md border">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">All Pages</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">Specific Pages</Label>
                        </div>
                    </RadioGroup>

                </CollapsibleContent>
            </Collapsible>
            <Collapsible>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text
                        style="text-base font-medium"
                        value="Refresh Button Configuration"
                    />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
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

                </CollapsibleContent>
            </Collapsible>
            <Collapsible>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text
                        style="text-base font-medium"
                        value="Forward Button Configuration"
                    />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
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

                </CollapsibleContent>
            </Collapsible>
        </>
    )
};