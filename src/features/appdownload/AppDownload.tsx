

import { Text } from "@/components/global/text";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";


export const AppDownload = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Collapsible className="mb-2 border border-primary5 p-4 rounded-lg" open={isOpen}>
            <CollapsibleTrigger className="w-full" onClick={() => setIsOpen(!isOpen)}>
                <Text style="font-medium" value="App Download"/>
                {isOpen ? <HiMiniChevronUp className="text-xl"/> : <HiMiniChevronDown className="text-xl"/>}
            </CollapsibleTrigger>
            <CollapsibleContent className="px-8 py-4">
                
            </CollapsibleContent>
        </Collapsible>

    )
}
















