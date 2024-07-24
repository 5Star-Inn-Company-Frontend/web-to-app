import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Text } from "./text";

export function CollapsibleComponent({
  title,
  subTitle,
  children,
}: {
  title: string | React.ReactNode;
  subTitle?: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="h-fit-content overflow-auto relative">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2 h-fit-content overflow-auto relative"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <div className="text-md font-semibold w-full">{title}</div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="px-4">
          {subTitle && <Text style="text-sm text-[grey]" value={subTitle} />}
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="px-4 h-full overflow-auto">{children}</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
