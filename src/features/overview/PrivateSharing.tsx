import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { AiOutlineCopy } from "react-icons/ai";

export default function PrivateSharing() {
    return (
        <div className="pb-4 xl:p-4 bg-white border-t border-primary20">
            <CollapsibleComponent title="Private Management Link">
                <div className="flex items-center gap-4 px-8">
                    <Text
                        style="text-sm"
                        value="https://median.co/app/jc7kxvk467jyrx7z4ruv0m2d98"
                    />
                    <AiOutlineCopy />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
