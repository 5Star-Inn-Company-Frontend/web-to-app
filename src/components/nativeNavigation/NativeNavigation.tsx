import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TopNavigation } from "./topNavigation/TopNavigation";
import { SidebarNavigation } from "./SidebarNavigation/SidebarNavigation";
import { BottomTabBar } from "./bottomTabBar/BottomTabBar";
import { ContextNavToolbar } from "./ContextNavToolbar/ContextNavToolbar";
import { Text } from "../global/text";



export function NativeNavigation() {
  return (
    <>
      <div className="px-12 py-10 border-b border-primary20 bg-white w-full rounded">
        <Text
          style="text-4xl font-medium mb-4"
          value="Native Navigation"
        />
        <Text
          style="text-sm text-[grey]"
          value="Native Navigation menus allow you to create a natural native
          app experience for users comparable to the most widely used
          and popular iOS and Android apps. Median supports a Top
          Navigation Bar, Sidebar Navigation Menu, Bottom Tab Bar Menu,
          and an iOS a Contextual Navigation Toolbar."
        />
      </div>
      {/* content */}
      <div >
        {/* .contentBar */}
        <div> 
          <Tabs defaultValue="Top Navigation Bar" className="w-full">
            <ScrollArea className="whitespace-nowrap">
              <div className="flex justify-between items-center pt-2 pb-4 px-10">
                <TabsList
                  id="tabs"
                  className="bg-deepgray justify-start items-start flex w-full lg:gap-4 xl:gap-4 md:gap-2 sm:gap-2 h-fit"
                >
                  <TabsTrigger
                    value="Top Navigation Bar"
                    style={{
                      backgroundColor: "#F2F2F2",
                      fontWeight: "400",
                      fontSize: "11px",
                    }}
                    className=" py-2 w-fit me-1 data-[state=active]:border-b-2 border-[black]"
                  >
                    Top Navigation Bar
                  </TabsTrigger>
                  <TabsTrigger
                    value="Sidebar Navigation"
                    style={{
                      backgroundColor: "#F2F2F2",
                      fontWeight: "400",
                      fontSize: "11px",
                    }}
                    className="w-fit data-[state=active]:border-b-2 border-[black]  py-2 "
                  >
                    Sidebar Navigation{" "}
                  </TabsTrigger>
                  <TabsTrigger
                    value="Bottom Tab Bar"
                    style={{
                      backgroundColor: "#F2F2F2",
                      fontWeight: "400",
                      fontSize: "11px",
                    }}
                    className="w-fit data-[state=active]:border-b-2 border-[black]  py-2 "
                  >
                    Bottom Tab Bar{" "}
                  </TabsTrigger>
                  <TabsTrigger
                    value="Contextual Nav Toolbar"
                    style={{
                      backgroundColor: "#F2F2F2",
                      fontWeight: "400",
                      fontSize: "11px",
                    }}
                    className="w-fit data-[state=active]:border-b-2 border-[black]  py-2 "
                  >
                    Contextual Nav Toolbar{" "}
                  </TabsTrigger>
                </TabsList>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className=" bg-white">
             
              <TabsContent value="Top Navigation Bar">
              <TopNavigation />
              </TabsContent>
              <TabsContent value="Sidebar Navigation">
                <SidebarNavigation />
              </TabsContent>
              <TabsContent value="Bottom Tab Bar">
                <BottomTabBar />
              </TabsContent>
              <TabsContent value="Contextual Nav Toolbar">
                <ContextNavToolbar />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

    </>
  );
}
