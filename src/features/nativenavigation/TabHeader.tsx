import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITabConfig } from "@/types/type";

interface ITabHeader {
    tabLists: ITabConfig[];
}

const TabTriggerStyles = {
    backgroundColor: "#F2F2F2",
    fontWeight: "400",
    fontSize: "11px",
};

export default function TabHeader({ tabLists }: ITabHeader) {
    return (
        <ScrollArea className="whitespace-nowrap">
            <div className="flex justify-between items-center pt-2 pb-4 px-10">
                <TabsList
                    id="tabs"
                    className="bg-deepgray justify-start items-start flex w-full lg:gap-4 xl:gap-4 md:gap-2 sm:gap-2 h-fit"
                >
                    {tabLists.map((tab, id) => {
                        return (
                            <TabsTrigger
                                key={id}
                                value={tab.value}
                                style={TabTriggerStyles}
                                className="w-fit data-[state=active]:border-b-2 border-[black]  py-2"
                            >
                                {tab.value}
                            </TabsTrigger>
                        );
                    })}
                </TabsList>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
