import { Text } from "@/components/global/text";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ReactNode, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface ITopNavigationCollapsable {
    title: string;
    children: ReactNode;
}

export default function TopNavigationCollapsable({ title, children }: ITopNavigationCollapsable) {
    const [toggleDropdown, setToggleDropdown] = useState(true);

    const handleClickToggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setToggleDropdown(!toggleDropdown);
    };

    return (
        <Collapsible open={toggleDropdown}>
            <CollapsibleTrigger
                onClick={handleClickToggleDropdown}
                className="w-full flex items-center justify-between mb-4 px-10"
            >
                <Text style="text-base font-medium" value={title} />
                <FaAngleDown />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-b border-primary20 px-10 pb-6 mb-8">{children}</CollapsibleContent>
        </Collapsible>
    );
}
