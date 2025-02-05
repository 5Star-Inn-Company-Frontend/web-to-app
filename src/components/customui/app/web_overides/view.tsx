import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserAgentConfigCard } from "./user_agentcard";
import { CustomConfigCard } from "./customcard";
import { OsConfigCard } from "@/components/global/os_config_card";

export const Web_OveridesSection = () => {
    return (
        <div>
            <div className="px-12 py-10 border-b border-primary20 bg-white w-full rounded">
                <Text style="text-4xl font-medium mb-4" value="Website Overides" />
                <Text
                    style="text-sm text-[grey]"
                    value="Web Overrides allow you to control how your website is presented within your app and how your app sends requests to your web server."
                />
            </div>
            <div className="px-6 py-10 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title="User Agent"
                    subTitle={`By default, a string is appended to the end of the device user agent so that you can identify requests originating from your app versus a standard mobile browser. You may choose to customize the string that is appended or provide a complete custom user agent to be used as a replacement instead of the device default user agent. Note that for apps initially created on GoNative.io the default string that is appended includes "gonative" while newer apps include "median".`}
                >
                    <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                        <OsConfigCard os="IOS">
                            <UserAgentConfigCard />
                        </OsConfigCard>
                        <OsConfigCard os="Android">
                            <UserAgentConfigCard />
                        </OsConfigCard>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="px-6 py-10 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title="Custom Css"
                    subTitle={`Custom CSS rules are applied to your website when it is displayed through your app. For instance, within your app you may need to hide navigation elements such as a footer menu or overlay elements such as a chat widget. CSS rules added in the top section are added to both iOS and Android apps.`}
                >
                    <div className="grid grid-col-1 gap-8 px-8">
                        <OsConfigCard os="IOS and Android">
                            <CustomConfigCard title="Custom CSS" />
                        </OsConfigCard>
                        <OsConfigCard os="IOS">
                            <CustomConfigCard title="Custom CSS" />
                        </OsConfigCard>
                        <OsConfigCard os="Android">
                            <CustomConfigCard title="Custom CSS" />
                        </OsConfigCard>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="px-6 py-10 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title="Cookie Persistence"
                    subTitle="By default, the cookie store in your app will respect the expiry parameters of cookies as received. Using this option you may force the expiry of all cookies to a preset duration. This functionality is useful for extending the duration of login sessions when it is not possible to make changes at the server level."
                >
                    <div className="px-8">
                        <RadioGroup
                            className="flex justify-between border p-[0.5rem] rounded-md w-fit gap-8"
                            defaultValue="default"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <Label htmlFor="r1">Default</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Customize" id="r2" />
                                <Label htmlFor="r2">Custom</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </CollapsibleComponent>
            </div>

            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Custom Javascript"
                    subTitle={`Enter Custom JavaScript to be injected onto your website pages when they are displayed through your app. For instance, you may find it more convenient to specify JavaScript Bridge commands here rather than adding this code on your website itself. JavaScript added in the top section is injected in both iOS and Android apps or use the platform-specific sections if only needed for one of your apps. Format the JavaScript similar to an external .js file without any HTML or`}
                >
                    <div className="grid grid-col-1 gap-8 px-8">
                        <OsConfigCard os="IOS and Android">
                            <CustomConfigCard title="Custom Javascript" />
                        </OsConfigCard>
                        <OsConfigCard os="IOS">
                            <CustomConfigCard title="Custom Javascript" />
                        </OsConfigCard>
                        <OsConfigCard os="Android">
                            <CustomConfigCard title="Custom Javascript" />
                        </OsConfigCard>
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    );
};
