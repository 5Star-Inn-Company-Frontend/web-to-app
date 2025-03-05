import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import { AiOutlineExport } from "react-icons/ai";

export const AppDevelopementTab = () => {
    return (
        <div>
            <CollapsibleComponent title="Self-Service App Developement" subTitle="">
                <div className="">
                    <div className="border-b border-primary20 pb-4 px-8">
                        <ul className="text-xs text-[grey] gap-8 list-disc list-inside leading-7 ">
                            <li>Enter your website url to build an app that displays your web content</li>
                            <li>Use Our Online Builders to add Icons and colors that match your branding</li>
                            <li>Add native menus, support for WebRTC, deep Linking, and much more to build a fully functioning app</li>
                        </ul>
                        <Button className="flex items-center gap-2 rounded-xl bg-primary20 text-xs text-black my-4 px-5">
                            Support portal
                            <AiOutlineExport size="0.8rem" />
                        </Button>
                    </div>
                    <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 px-8 py-5">
                        <div className="border border-primary20 p-4 rounded-md">
                            <Text style="font-medium mb-2" value="Assisted App Developement" />
                            <Text style="text-sm font-medium mb-4" value="How it works:" />
                            <ul className="text-xs text-[grey] grid gap-y-6 list-decimal list-inside">
                                <li>You develop your app using median plartform with our assistance, on your schedule</li>
                                <li>Our team assists through email in cluding configuring push notification and native plugins</li>
                                <li>
                                    Add our app publishing service to have our team publish your app to the Apple app Store and Google play store with a
                                    guarantee of approval
                                </li>
                            </ul>
                            <div className="flex items-center gap-2 font-semibold text-2xl my-4 justify-center">
                                #20000 <span className="font-light text-xs">one-time payment</span>
                            </div>
                            <Button className="bg-black text-white w-full">Purchase</Button>
                        </div>
                        <div className="border border-primary20 p-4 rounded-md">
                            <Text style="font-medium mb-2" value="Conciege App Developement" />
                            <Text style="text-sm font-medium mb-4" value="How it works:" />
                            <ul className="text-xs text-[grey] grid gap-y-6 list-decimal list-inside">
                                <li >We develop your app for you using our plartform, typically requireing 1-2 weeks developement time</li>
                                <li >A dedicated project management meets with you via video call to understand your requirement</li>
                                <li>
                                    Add our app publishing service to have our team publish your app to the Apple app Store and Google play store with a
                                    guarantee of approval
                                </li>
                            </ul>
                            <div className="flex items-center gap-2 font-semibold text-2xl my-4 justify-center">
                                #20000 <span className="font-light text-xs">one-time payment</span>
                            </div>
                            <Button className="bg-black text-white w-full">Purchase</Button>
                        </div>
                    </div>
                </div>
            </CollapsibleComponent>
        </div>
    );
};
