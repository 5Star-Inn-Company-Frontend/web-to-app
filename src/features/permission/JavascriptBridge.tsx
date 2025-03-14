import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";

export default function JavascriptBridge() {
    return (
        <div className="pt-2 pb-5 xl:px-6 xl:py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="JaveScript Bridge Allowed"
                subTitle="By default all pages that are displayed in your app can access the Median JavaScript Bridge. You may optionally restrict access based on URL paths. This feature should be disabled during debugging."
            >
                <Button className="flex items-center mx-8 gap-2 bg-white border text-black hover:text-white">
                    <AiOutlinePlus size="1.3rem" />
                    Add
                </Button>
            </CollapsibleComponent>
        </div>
    );
}
