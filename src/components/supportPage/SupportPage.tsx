import { AiOutlineExport } from "react-icons/ai";
import { CollapsibleComponent } from "../global/collapsibleComponent";
import { Button } from "../ui/button";
import { Text } from "../global/text";
export function SupportPage() {
    return (
        <>
            <div className="px-8 py-8 border-b border-primary20 bg-white w-full rounded">
                <h1 className="text-4xl font-medium">Support & Updates</h1>
            </div>
            <CollapsibleComponent title="Self-Support for free" subTitle="">
                <div className="border-b border-primary20 pb-4 px-8">
                    <ul className="text-xs text-[grey] gap-8 list-disc list-inside leading-7 ">
                        <li>Six months of online app rebuilds for changes to your app configuration</li>
                        <li>Apps function indefinitely subject to future compatibility with iOS and Android versions</li>
                        <li>Community support through Median`s documentation and support portal</li>
                    </ul>
                    <Button className="flex items-center gap-2 rounded-xl bg-primary20 text-xs text-black my-4 px-5">
                        Support portal
                        <AiOutlineExport size="0.8rem" />
                    </Button>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 px-8 py-5">
                    <div className="border border-primary20 p-4 rounded-md flex flex-col justify-between">
                        <div>
                            <Text style="font-medium mb-6" value="App Support & Updates" />
                            <ul className="text-xs text-[grey] grid gap-y-6 list-disc px-4">
                                <li>
                                    Unlimited online app rebuilds and a guarantee of compatibility with iOS and Android updates
                                </li>
                                <li>Priority email support with one business day or sooner response from our team</li>
                                <li>Engineering support for web to app integrationss and advanced troubleshooting</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 font-semibold text-2xl mb-2">
                                #20000 <span className="font-light text-xs">one-time payment</span>
                            </div>
                            <Button className="bg-black text-white w-full">Purchase</Button>
                        </div>
                    </div>
                    <div className="border border-primary20 py-4 rounded-md">
                        <div className="px-4 pb-4 border-b border-primary40">
                            <Text style="font-medium mb-6" value="Enterprise Support" />
                            <ul className="text-xs text-[grey] grid gap-y-6 list-disc px-4">
                                <li>Technical support for MDM deploymens, private app stores, app security assessments</li>
                                <li>Phone-based incidents reporting for business hours or 24-hour coverage</li>
                                <li>SLA to provide certainty of ongoing compatibility and response yarget times</li>
                            </ul>
                        </div>
                        <div className="px-4 py-2">
                            <Text value="Custom Pricing" style="font-semibold text-center" />
                            <p className="text-xs text-center my-4">our team will contact you to discuss your requirements</p>
                            <Button className="bg-black text-white w-full">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </CollapsibleComponent>
        </>
    );
}
