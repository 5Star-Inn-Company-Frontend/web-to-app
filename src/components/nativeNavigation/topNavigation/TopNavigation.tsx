import { Text } from "@/components/global/text";
import { FaAngleDown } from "react-icons/fa6";
import { OsConfigCard } from "@/components/global/os_config_card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TopNavigationCard } from "@/features/nativenavigation/TopNavigationCard";
import { Switch } from "@/components/ui/switch";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IoChevronForward } from "react-icons/io5";
import { IoEyeSharp, IoAdd } from "react-icons/io5";

export function TopNavigation() {
    return (
        // topNavigation
        <div>
            <Collapsible>
                <CollapsibleTrigger className="w-full flex items-center justify-between mb-4 px-10">
                    <Text
                        style="text-base font-medium"
                        value="Display Mode"
                    />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">

                    <p className="text-sm text-primary60">A native Top Navigation Bar can be used to helo your users navigate throughout your app.
                        You can display dynamic titles depending on the page being shown.
                        You may also add a search bar form, refresh functionality, and custom buttons.
                        When a Sidebar Navigation Menu is also enabled, a "hamburger" toggle button is shown
                        in the top nav bar to easily open the menu.
                    </p>
                    <div>
                        <div className="grid grid-cols-2 gap-x-8 mt-6">
                            <OsConfigCard
                                os="IOS"
                                radios={[
                                    {
                                        title: "Auto",
                                        label: "Auto"
                                    }, {
                                        title: "Always",
                                        label: "Always"
                                    }
                                ]}
                            />
                            <OsConfigCard
                                os="IOS"
                                radios={[
                                    {
                                        title: "Disable",
                                        label: "disable"
                                    }, {
                                        title: "Enable",
                                        label: "enable"
                                    }
                                ]}
                            />
                        </div>
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
                        Configure display settings for text in the top navigation bar and add an optional custom horizontal image.
                        To show different content based on the page being shown in your app, configure Dynamic Titles.
                        Note hat for iOS the color of any native UI elements such as the hamburger menu will follow the app-wide Theme colors set on the Branding tab.
                    </p>
                    <div className="grid gap-y-5">

                        <TopNavigationCard os="IOS" radios={[{ title: "Text", label: "Text" }, { title: "Image", label: "Image" },]} />
                        <TopNavigationCard os="Android" radios={[{ title: "Text", label: "Text" }, { title: "Image", label: "Image" },]} />
                    </div>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible>
                <CollapsibleTrigger className="w-full flex items-center justify-between my-4 px-10">
                    <Text
                        style="text-base font-medium"
                        value="Top Navigate Bar Visual Editor"
                    />
                    <div className="flex items-center gap-x-4">
                        <Switch id="Advance Mode" />
                        <FaAngleDown />
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <div className="border border-primary20 p-3 rounded-lg">
                        <div className="border border-primary20 p-2 rounded-lg">
                            <div className="flex items-center gap-x-5 bg-deepgray p-2 rounded-md">
                                <Input className="p-1 bg-deepgray border-primary40" placeholder="Top Nav Bar Menu 1 - All Pages" />
                                <div className="flex items-center gap-x-2">
                                    <IoIosCheckmarkCircle />
                                    <IoCopyOutline />
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                        </div>
                        <>
                            <Label className="font-normal my-5 block">Pages to Display Top Nav Bar</Label>
                            <RadioGroup defaultValue="comfortable" className="flex justify-between items-center p-1 rounded-md border border-primary20">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label className="text-primary40 font-normal text-xs" htmlFor="r1">Single Page</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label className="text-primary40 font-normal text-xs" htmlFor="r2">Multiple Pages</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label className="text-primary40 font-normal text-xs" htmlFor="r3">All Pages</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label className="text-primary40 font-normal text-xs" htmlFor="r3">Custom</Label>
                                </div>
                            </RadioGroup>
                        </>
                        <div className="flex items-center justify-end mt-8">
                            <p className="text-xs">TEST RULE</p>
                            <IoChevronForward />
                        </div>
                        <>
                            <Label className="font-normal my-5 block">Display Mode</Label>
                            <RadioGroup defaultValue="comfortable" className="flex justify-between items-center p-1 rounded-md border border-primary20">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label className="text-primary40 font-normal text-xs" htmlFor="r1">Page Title</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label className="text-primary40 font-normal text-xs" htmlFor="r2">Custom Title</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label className="text-primary40 font-normal text-xs" htmlFor="r3">Images</Label>
                                </div>

                            </RadioGroup>
                        </>
                        <div className="flex items-center justify-center mt-8">
                            <div className="flex items-center gap-x-4">
                                <IoEyeSharp />
                                <div className="bg-deepgray px-14 py-3">
                                    <p className="text-xs">Page Title</p>
                                </div>
                                <IoAdd />
                            </div>
                        </div>
                    </div>

                   

                    <div className="flex items-center gap-x-6 justify-center my-10">
                        <div className="flex items-center gap-x-2 cursor-pointer">
                            <RiDeleteBin6Line />
                            <span className="text-xs">Clear All</span>
                        </div>
                        <div className="flex items-center gap-x-2 cursor-pointer">
                            <IoAdd />
                            <span className="text-xs">Add Top Nav Bar</span>
                        </div>
                    </div>
                </CollapsibleContent>

            </Collapsible>

        </div>
    )
};