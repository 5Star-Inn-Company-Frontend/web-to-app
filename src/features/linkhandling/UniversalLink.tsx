import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";

export default function UniversalLink() {
    return (
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
    );
}
