import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { FaAndroid, FaAngleDown } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { BsArrowRightShort } from "react-icons/bs";
import { Input } from "../ui/input";

export function PushNotification() {
    return (
        <>
            <div className="px-10 pt-8 border-b">
                <Text style="font-medium text-3xl mb-4" value="Push Notifications" />
                <Button className="bg-deepgray  text-black hover:bg-deepgray w-full">One Signal</Button>
            </div>
            <div className="px-10 py-8 border-b border-primary20">
                <p className="text-sm mb-4 text-primary60">
                    OneSignal can be tested during development. A license is required to publish.
                </p>
                <div className="flex items-center gap-x-2 mb-6">
                    <Text style="font-semibold text-xl" value="#20,000" />
                    <span>one-time payment</span>
                </div>
                <h2> </h2>
                <div className="flex items-center space-x-4">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Add License</Label>
                </div>
            </div>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text style="text-base font-medium" value="Enable One Signal" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <RadioGroup
                        defaultValue="disable"
                        className="inline-flex items-center gap-x-20 p-1 rounded-md border"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">
                                Disable
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">
                                Enable
                            </Label>
                        </div>
                    </RadioGroup>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text style="text-base font-medium" value="Legacy Mode" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <p className="text-sm text-primary60 mb-4">
                        Your app will integrate with the latest OneSignal SDKs and user-centric data model by default.
                        Legacy mode provides support for OneSignal’s v4 SDKs and their previous device-centric data
                        model. To migrate your app from legacy mode to the latest SDKs disable this setting and refer to
                        OneSignal’s User Model Migration Guide as linked in our documentation.
                    </p>
                    <RadioGroup
                        defaultValue="disable"
                        className="inline-flex items-center gap-x-20 p-1 rounded-md border"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">
                                Disable
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">
                                Enable
                            </Label>
                        </div>
                    </RadioGroup>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text style="text-base font-medium" value="App-ID" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <p className="text-sm text-primary60 mb-4">
                        Median requires just your OneSignal App Id to configure OneSignal to send notifications to your
                        app. You will find this on your OneSignal Dashboard under App Settings{" "}
                        <span className="inline-flex items-center text-sm">
                            <BsArrowRightShort /> Keys & IDs.
                        </span>
                    </p>
                    <Input className="px-2 w-[70%]" placeholder="xxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
                </CollapsibleContent>
            </Collapsible>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text style="text-base font-medium" value="Automatic Registration" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <p className="text-sm text-primary60 mb-4">
                        By default, on first launch your app will automatically register for push notifications and
                        prompt for user consent. When set to manual, you must initiate registration using the JavaScript
                        Bridge.
                    </p>
                    <RadioGroup
                        defaultValue="disable"
                        className="inline-flex items-center gap-x-20 p-1 rounded-md border"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">
                                Automatic
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">
                                Manual
                            </Label>
                        </div>
                    </RadioGroup>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text style="text-base font-medium" value="Automatic Data Transmission" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <p className="text-sm text-primary60 mb-4">
                        By default, your app will automatically send device data to OneSignal prior to requesting push
                        notification consent. This includes obtaining a oneSignalUserId which can be used to associate
                        the device and user. To facilitate GDPR compliance, you may set this to manual which will defer
                        sending device data until you obtain consent from the user. You must then use the JavaScript
                        Bridge to confirm consent has been granted and begin transmitting data.
                    </p>
                    <RadioGroup
                        defaultValue="disable"
                        className="inline-flex items-center gap-x-20 p-1 rounded-md border"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">
                                Automatic
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">
                                Manual
                            </Label>
                        </div>
                    </RadioGroup>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text style="text-base font-medium" value="Foreground Notifications" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <RadioGroup
                        defaultValue="disable"
                        className="inline-flex items-center gap-x-20 p-1 rounded-md border"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">
                                Show
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">
                                Hide
                            </Label>
                        </div>
                    </RadioGroup>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-4 px-10">
                    <Text style="text-base font-medium" value="Android Notifications Icon" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <p className="text-sm text-primary60 mb-4">
                        Android notification icons are built into your app and must be a monochromatic image with
                        transparent background.
                    </p>

                    <div className="border border-primary60 rounded-lg w-[60%]">
                        <div className="flex items-center gap-x-2 px-5 py-3 border-b border-primary60">
                            <FaAndroid />
                            <span>Andriod</span>
                        </div>
                        <div className="px-5 py-4 flex items-center justify-between ">
                            <Label htmlFor="picture" className="border cursor-pointer py-2 px-5 rounded-md">
                                Change Image
                            </Label>
                            <Input id="picture" type="file" className="hidden" />
                            <div className="bg-primary80 w-20 h-20 flex items-center justify-center">
                                <FaAndroid className="text-white text-5xl" />
                            </div>
                        </div>
                    </div>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text style="text-base font-medium" value="Auto Data Transmission" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <p className="text-sm text-primary60 mb-4">
                        Display a native UI within your app which users can use to toggle OneSignal data tags on/off to
                        self-manage their subscriptions. Host a JSON file which your app will load dynaically at runtime
                        to determine the data tags to display in the UI.
                    </p>
                    <Input className="px-2 w-full" placeholder="https://www.topwisesz.com/assets/section2_4.271c6ee4" />
                </CollapsibleContent>
            </Collapsible>
            <Collapsible open={true}>
                <CollapsibleTrigger className="w-full flex items-center justify-between py-6 px-10">
                    <Text style="text-base font-medium" value="Notification Sound" />
                    <FaAngleDown />
                </CollapsibleTrigger>
                <CollapsibleContent className="border-b border-primary20 px-10 pb-6">
                    <p className="text-sm text-primary60 mb-4">
                        Optionally include your own custom notification sounds to specify in OneSignal and play on the
                        user's device when the push notification is received. mp3 and wav files are supported.
                    </p>
                    <div>
                        <CustomSound title="CUSTOM_SOUND_1" />
                        <CustomSound title="CUSTOM_SOUND_2" />
                        <CustomSound title="CUSTOM_SOUND_3" />
                        <CustomSound title="CUSTOM_SOUND_4" />
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </>
    );
}

interface CustomSoundProps {
    title: string;
}
const CustomSound = ({ title }: CustomSoundProps) => {
    return (
        <div className="px-5 py-4 flex items-center gap-x-10">
            <span className="text-xs text-primary60">{title}</span>
            <Label htmlFor="picture" className="border cursor-pointer py-3 px-8 text-xs rounded-2xl">
                Upload
            </Label>
            <Input id="picture" type="file" className="hidden" />
        </div>
    );
};
