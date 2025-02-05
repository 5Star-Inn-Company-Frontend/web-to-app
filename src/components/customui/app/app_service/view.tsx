import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AppDevelopementTab } from "./appDevelopementTab";
import { AppPublishingTab } from "./appPubishingTab";
import { AppCustomDevelopement } from "./custom_developement";
import { Text } from "@/components/global/text";

export const AppServicePageWrapper = () => {
    return (
        <>
            <div className="px-8 py-8  bg-white w-full rounded">
                <Text style="text-4xl font-medium" value="5starcompany Service" />
            </div>
            <Tabs defaultValue="App Developement" className="w-full">
                <ScrollArea className="border-b border-primary20 px-8">
                    <div className="flex justify-between items-center bg-deepgray rounded-t-lg">
                        <TabsList className="flex justify-between w-full lg:gap-4 xl:gap-4 md:gap-4 sm:gap-2 h-fit">
                            <TabsTrigger value="App Developement" className=" py-2 px-4 data-[state=active]:border-b-2 border-[grey]">
                                App Developement
                            </TabsTrigger>
                            <TabsTrigger value="App Publishing" className="w-fit data-[state=active]:border-b-2 border-[grey] py-2">
                                App Publishing{" "}
                            </TabsTrigger>
                            <TabsTrigger value="Custorm Develoepement" className="px-4 py-2 data-[state=active]:border-b-2 border-[grey]">
                                Custorm Developement
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                <div className=" bg-white">
                    <TabsContent value="App Developement">
                        <AppDevelopementTab />
                    </TabsContent>
                    <TabsContent value="App Publishing">
                        <AppPublishingTab />
                    </TabsContent>
                    <TabsContent value="Custorm Develoepement">
                        <AppCustomDevelopement />
                    </TabsContent>
                </div>
            </Tabs>
        </>
    );
};
