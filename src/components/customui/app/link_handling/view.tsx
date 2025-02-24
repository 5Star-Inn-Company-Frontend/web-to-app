import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RestoreDefaultActionList } from "./restore_default_actionlist";
import { Label } from "@/components/ui/label";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import LinkHandlingRadio from "@/features/linkhandling/LinkHandlingRadio";

export const LinkHandlingSection = () => {
    return (
        <>
            <div className="px-12 py-10 border-b border-primary20 bg-white w-full rounded">
                <Text style="text-4xl font-medium mb-4" value="Link Handling" />
                <Text
                    style="text-sm text-[grey]"
                    value="Link handling settings control how links on pages are displayed within your app when they are opened. You can also configure deep linking to set links pointing to your website in text messages, emails and on other webpages to open within your app."
                />
            </div>
            <div className="p-4 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title={
                        <div className="flex items-center justify-between w-full">
                            <span className="text-md font-semibold">Link Behavior</span>
                            <div className="flex items-center space-x-2">
                                <Label htmlFor="airplane-mode" className="font-semibold text-sm">
                                    Advance mode
                                </Label>
                                <Switch id="airplane-mode" />
                            </div>
                        </div>
                    }
                    subTitle="Define rules to control which links open internally within your app, launch within the in-app browser window, or open externally in the device's default browser or app. Rules are applied in order from top to bottom."
                >
                    <div className="w-fit m-auto my-4">
                        <Button className="flex items-center gap-2 bg-white text-black hover:border hover:bg-white hover:text-black">
                            <AiOutlineReload size="1.4rem" />
                            Restore Default
                        </Button>
                    </div>

                    <RestoreDefaultActionList />

                    {/*  */}
                    <div className="w-fit m-auto my-4">
                        <Button className="flex items-center gap-2 bg-white  text-black hover:border hover:bg-white hover:text-black">
                            <AiOutlinePlus size="1.4rem" />
                            Add Rules
                        </Button>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="px-4 py-8 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title="New windows"
                    subTitle="By default a URL specified in the window.open() JavaScript function will load in a new window within your app similar to how a browser opens a new tab. When new windows are blocked your app will instead open the URL in the current webview. You can also use the Median Javascript Bridge to manually open and close webview windows."
                >
                    <LinkHandlingRadio />
                </CollapsibleComponent>
            </div>
            <div className="px-4 py-8 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title="Universal Links /Deep Links "
                    subTitle="Deep Links / Universal Links configure your device to open links pointing to your site in emails/text messages/other websites directly in your app rather than in a mobile browser. This provides a richer native app user experience."
                >
                    <div className="px-8">
                        <Button className="flex items-center gap-2 bg-white border text-black my-4">
                            <AiOutlinePlus size="1.4rem" />
                            Add Domain
                        </Button>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="px-4 py-16 mb-10 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title="Universal Links /Deep Links "
                    subTitle="URL Schemes are an advanced configuration option used to define a non-standard link format that will only open in your app and not in the device browser e.g. youruniquestring://yoursite.com/path. This functionality is helpful in authentication redirect flows or for a more seamless user experience. URL Schemes will only work on mobile devices and are not compatible with desktop browsers. We recommend only experienced developers implement this functionality."
                >
                    <div className="px-8">
                        <Input
                            type="text"
                            className="p-2 mt-6 rounded border border-primary20"
                            placeholder="e.g youruniquestring"
                        />
                    </div>
                </CollapsibleComponent>
            </div>
        </>
    );
};
