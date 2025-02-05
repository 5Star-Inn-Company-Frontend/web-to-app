import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ReactElement, useState } from "react";

interface CollapseProps {
    title: string;
    children: ReactElement;
}

export const Collapse = ({ title, children }: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Collapsible className="mb-2 border border-primary5 p-4 rounded-lg" open={isOpen}>
            <CollapsibleTrigger className="w-full" onClick={() => setIsOpen(!isOpen)}>
                <h6>{title}</h6>
                {isOpen ? <HiMiniChevronUp className="text-xl" /> : <HiMiniChevronDown className="text-xl" />}
            </CollapsibleTrigger>
            <CollapsibleContent className="px-8 py-4">{children}</CollapsibleContent>
        </Collapsible>
    );
};
