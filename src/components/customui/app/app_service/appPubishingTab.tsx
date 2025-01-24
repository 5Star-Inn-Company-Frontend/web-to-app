import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"

export const AppPublishingTab =()=>{
    return(
        <div>
            <CollapsibleComponent
                    title="Self Publish"
                    subTitle=""
                >
                    <div className="border-b border-primary20 px-8">

                    <ul className="text-xs text-[grey] gap-8 list-disc list-inside grid gap-y-4">
                        <li>For iOS a Mac with Xcode is required to build and upload your app to the Apple App Store</li>
                        <li>For Android the AAB file created by our build platform can be uploaded directly to Google Play</li>
                        <li>Our Publishing Guide is a helpful reference for customers who are publishing themselves</li>
                    </ul>
                    <Button className="bg-primary20 text-primary80 font-medium rounded-xl text-xs my-4">View Documentaions</Button>
                    </div>
                    <div className="w-full px-10 py-6 ">
                        <div className="border border-primary20 py-4 px-8 rounded-md w-full">
                            <Text
                                style="font-medium my-4"
                                value="5starComapny publishing Team"
                            />
                            <div className="flex flex-col gap-6">
                                <Text
                                    style="text-xs font-normal"
                                    value="Our experienced team manages the end-to-end process for the Apple App Store and Google Play"
                                />
                                <Text
                                    style="text-xs font-normal"
                                    value="On-device testing for iOS via TestFlight (Apple Mac and Xcode not required)"
                                />
                                <Text
                                    style="text-xs font-normal"
                                    value="Complete configuration of OneSignal push notifications"
                                />
                                <Text
                                    style="text-xs font-normal"
                                    value="Preparation of keystores, signing certificates and provisioning profiles"
                                />
                                <Text
                                    style="text-xs font-normal"
                                    value="Creation of app store listings and screenshots"
                                />
                                <Text
                                    style="text-xs font-normal"
                                    value="Management of app review feedback with guarantee of approval"
                                />
                            </div>
                            <div className="flex items-center gap-2 font-semibold text-2xl mt-8 mb-5">#20000 <span className="font-light text-xs">one-time payment</span></div>
                            <Button className="bg-black text-white w-[9.5rem]">
                                Purchase
                            </Button>
                        </div>
                    </div>
                </CollapsibleComponent>
        </div>
)
}