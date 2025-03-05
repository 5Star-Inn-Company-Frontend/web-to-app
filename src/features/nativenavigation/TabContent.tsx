import { TabsContent } from "@/components/ui/tabs";
import { ITabConfig } from "@/types/type";

interface ITabContent {
    tabs: ITabConfig[];
}

export default function TabContent({ tabs }: ITabContent) {
    return (
        <>
            {tabs.map((tab, id) => {
                return (
                    <TabsContent key={id} value={tab.value}>
                        <tab.component />
                    </TabsContent>
                );
            })}
        </>
    );
}
