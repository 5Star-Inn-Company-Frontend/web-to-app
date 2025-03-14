import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";

interface PluginCardProps {
    img: string;
    title: string;
}

export default function PluginCardMobile({ img, title }: PluginCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Collapsible className="mb-2 border border-primary5 p-4 rounded-lg" open={isOpen}>
            <CollapsibleTrigger className="w-full" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center gap-x-2 justify-between">
                    <div className="flex items-center gap-x-2">
                        <img className="h-5 w-5" src={img} alt="" />
                        <h3 className="text-sm font-medium">{title}</h3>
                    </div>
                    <div className="flex items-center gap-x-2">
                        {isOpen ? (
                            <HiMiniChevronUp className="text-xl" />
                        ) : (
                            <HiMiniChevronDown className="text-xl" />
                        )}
                    </div>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="xl:px-8 xl:py-4">
                <div className="flex items-center gap-x-2 mt-4 mb-4">
                    <h4 className="font-bold">#2000</h4>
                    <span className="text-xs text-primary10">one-time</span>
                </div>
                <div className="flex items-center gap-x-4 mb-6">
                    <Button className="bg-primary70 rounded-lg text-black text-sm gap-x-3 w-[9.0625rem] h-[2.3125rem]">
                        View docs
                        <img src="/viewdocs.svg" alt="" />
                    </Button>
                    <Button className="w-[9.0625rem] h-[2.3125rem] font-medium text-xs rounded-lg">
                        Add
                    </Button>
                </div>
                <p className="text-primary60 text-sm">
                    Our most popular push notification service offers advanced messaging and fits
                    businesses of all sizes, and is free to test before publishing. Opt for
                    Full-Service, and we’ll configure it for your app.
                </p>
            </CollapsibleContent>
        </Collapsible>
    );
}
