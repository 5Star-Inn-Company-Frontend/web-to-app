import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { IPluginProps } from "@/types/type";
import { useState } from "react";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const PluginCard = ({ img, name, amount, isActive, docLink }: IPluginProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Collapsible className="mb-2 border border-primary5 p-4 rounded-lg" open={isOpen}>
            <CollapsibleTrigger className="w-full" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center gap-x-2 justify-between">
                    <div className="flex items-center gap-x-2">
                        <img className="h-6 w-6 object-contain object-center" src={img} alt="" />
                        <h3 className="text-sm font-medium">{name}</h3>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <h4 className="text-sm font-bold">#{amount}</h4>
                        <span className="text-xs text-primary10">one-time</span>
                        <Button className="bg-primary70 rounded-lg text-black text-[0.625rem] w-[4.1875rem] h-[1.0625rem]">
                            <Link to={docLink}>View docs</Link>
                        </Button>
                        {isActive && (
                            <Button className="w-[3.25rem] h-[1.0625rem] font-medium text-xs rounded-lg">
                                Add
                            </Button>
                        )}
                        {isOpen ? (
                            <HiMiniChevronUp className="text-xl" />
                        ) : (
                            <HiMiniChevronDown className="text-xl" />
                        )}
                    </div>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-8 py-4">
                <p className="text-primary60 text-sm">
                    Our most popular push notification service offers advanced messaging and fits
                    businesses of all sizes, and is free to test before publishing. Opt for
                    Full-Service, and we’ll configure it for your app.
                </p>
            </CollapsibleContent>
        </Collapsible>
    );
};
