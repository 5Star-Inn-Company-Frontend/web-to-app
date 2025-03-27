import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AppDevelopementTab } from "./appDevelopementTab";
import { AppPublishingTab } from "./appPubishingTab";
import { AppCustomDevelopement } from "./custom_developement";
import { Text } from "@/components/global/text";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const AppServicePageWrapper = () => {
    const [activeTab, setActiveTab] = useState("App Developement");

    return (
        <>
            <div className="px-6 xl:px-8 py-8  bg-white w-full rounded">
                <Text style="text-3xl xl:text-4xl font-medium" value="5starcompany Service" />
            </div>
            <Tabs
                defaultValue="App Developement"
                className="w-full"
                value={activeTab}
                onValueChange={setActiveTab}
            >
                <ScrollArea className="border-b border-primary20 px-6 xl:px-8">
                    <div className="flex justify-between items-center bg-deepgray rounded-t-lg mb-4 xl:mb-0">
                        {/* Mobile Dropdown */}
                        <div className="md:hidden w-full">
                            <Select value={activeTab} onValueChange={setActiveTab}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="App Developement">
                                        App Developement
                                    </SelectItem>
                                    <SelectItem value="App Publishing">App Publishing</SelectItem>
                                    <SelectItem value="Custorm Develoepement">
                                        Custorm Developement
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Desktop Tabs */}
                        <TabsList className="hidden md:flex justify-between w-full lg:gap-4 xl:gap-4 md:gap-4 sm:gap-2 h-fit">
                            <TabsTrigger
                                value="App Developement"
                                className="py-2 px-4 data-[state=active]:border-b-2 border-[grey]"
                            >
                                App Developement
                            </TabsTrigger>
                            <TabsTrigger
                                value="App Publishing"
                                className="w-fit data-[state=active]:border-b-2 border-[grey] py-2"
                            >
                                App Publishing{" "}
                            </TabsTrigger>
                            <TabsTrigger
                                value="Custorm Develoepement"
                                className="px-4 py-2 data-[state=active]:border-b-2 border-[grey]"
                            >
                                Custorm Developement
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                <div className="bg-white">
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
