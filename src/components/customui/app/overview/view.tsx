import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineCopy, AiOutlineUsergroupAdd } from "react-icons/ai";
import Initials from "@/utils/initials";
import Dropdown from "@/components/Dropdown";

export const OverviewSection = () => {
    return (
        <div className="flex gap-1 flex-col">
            <div className="px-12 py-10 border-b border-primary20 bg-white w-full rounded">
                <Text style="text-4xl font-medium mb-4" value="App Overview" />
            </div>
            <div className="px-8 bg-white pb-5">
                <CollapsibleComponent title="Website Url" subTitle="The website to display when you loads">
                    <Input type="text" className="p-2 w-[90%] mx-auto bg-white border" />
                </CollapsibleComponent>
            </div>
            <div className="px-8 pb-5 bg-white border-t border-primary20">
                <CollapsibleComponent title="App Name" subTitle="Your name is displayed on the device homescreen">
                    <Input type="text" className="border w-[90%] mx-auto p-2" />
                </CollapsibleComponent>
            </div>
            <div className="px-8 pb-5 bg-white border-t border-primary20">
                <CollapsibleComponent
                    title="App Description"
                    subTitle="A short description of your app for reference purpose. Only used internally and not not seen by end users."
                >
                    <div className="px-8">
                        <textarea className="border border-primary20 w-full rounded-lg focus:outline-none"></textarea>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white border-t border-primary20">
                <CollapsibleComponent title="Private Management Link">
                    <div className="flex items-center gap-4 px-8">
                        <Text style="text-sm" value="https://median.co/app/jc7kxvk467jyrx7z4ruv0m2d98" />
                        <AiOutlineCopy />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white border-t border-primary20">
                <CollapsibleComponent title="Public Sharing">
                    <div className="flex items-center gap-4 px-8">
                        <Text style="text-sm" value="https://median.co/app/jc7kxvk467jyrx7z4ruv0m2d98" />
                        <AiOutlineCopy />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white border-t border-primary20">
                <CollapsibleComponent title="Organization members with access to this app">
                    <div className="flex flex-col px-8">
                        <div className="flex items-center justify-between py-2 pr-1">
                            <div className="flex gap-x-1 items-center">
                                <Initials name="Emmy O" />
                                <Text value="Emmy" style="text-sm text-start" />
                            </div>
                            <Dropdown options={[]} selected="Admin" label="Admin" onSelect={() => {}} />
                        </div>
                        <div className="flex items-center justify-between py-2 pr-1">
                            <div className="flex gap-x-1 items-center">
                                <Initials name="Odejinmi Samuel" />
                                <Text value="Odejinmi Samuel" style="text-sm text-start" />
                            </div>
                            <Dropdown options={[]} selected="Admin" label="Admin" onSelect={() => {}} />
                        </div>
                        <div className="w-fit mt-5">
                            <Button className="flex items-center gap-4 text-sm cursor-pointer justify-between">
                                <AiOutlineUsergroupAdd size="1.3rem" color="grey" />
                                Manage access
                            </Button>
                        </div>
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    );
};
