import Dropdown from "@/components/Dropdown";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import Initials from "@/utils/initials";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const members = ["Emmy O", "Odejinmi Samuel"];

export default function Organization() {
    return (
        <div className="p-4 bg-white border-t border-primary20">
            <CollapsibleComponent title="Organization members with access to this app">
                <div className="flex flex-col px-8">
                    {members.map((member) => {
                        return (
                            <div className="flex items-center justify-between py-2 pr-1">
                                <div className="flex gap-x-1 items-center">
                                    <Initials name={member} />
                                    <Text value={member} style="text-sm text-start" />
                                </div>
                                <Dropdown
                                    options={["Admin", "Editor", "Viewer"]}
                                    selected="Admin"
                                    label="Admin"
                                    onSelect={() => {}}
                                />
                            </div>
                        );
                    })}

                    <div className="w-fit mt-5 mb-10">
                        <Button className="flex items-center gap-4 text-sm cursor-pointer justify-between">
                            <AiOutlineUsergroupAdd size="1.3rem" color="grey" />
                            Manage access
                        </Button>
                    </div>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
