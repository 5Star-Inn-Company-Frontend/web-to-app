import { AppSideNav } from "../customui/app/sidenav";
import { SimulationView } from "../global/simulationview";
import { TopNav } from "../global/topnav";
import "./nativeNavigation.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TopNavigation } from "./topNavigation/TopNavigation";
import { SidebarNavigation } from "./SidebarNavigation/SidebarNavigation";
import { BottomTabBar } from "./bottomTabBar/BottomTabBar";
import { ContextNavToolbar } from "./ContextNavToolbar/ContextNavToolbar";



export function NativeNavigation() {
  return (
    <>
      <div className="top">
        <h2>Native Navigation</h2>
        <p>
          Native Navigation menus allow you to create a natural native
          app experience for users comparable to the most widely used
          and popular iOS and Android apps. Median supports a Top
          Navigation Bar, Sidebar Navigation Menu, Bottom Tab Bar Menu,
          and an iOS a Contextual Navigation Toolbar.
        </p>
      </div>
      <div className="content">
        <div className="contentBar">
          <Tabs defaultValue="Top Navigation Bar" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex justify-between items-center pb-4 px-4">
                <TabsList
                  id="tabs"
                  style={{ backgroundColor: "#F2F2F2", width: "100%" }}
                  className="justify-start items-start flex w-full lg:gap-4 xl:gap-4 md:gap-2 sm:gap-2 h-fit"
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
            <div className="-md bg-white px-4">
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
    // <div className="nativeNavigation">
    //   <div className="bigContainer">
    //     <div className="mainContainer">
    //       <div className="leftContainer">
    //         <div className="center">
    //           <div className="top">
    //             <h2>Native Navigation</h2>
    //             <p>
    //               Native Navigation menus allow you to create a natural native
    //               app experience for users comparable to the most widely used
    //               and popular iOS and Android apps. Median supports a Top
    //               Navigation Bar, Sidebar Navigation Menu, Bottom Tab Bar Menu,
    //               and an iOS a Contextual Navigation Toolbar.
    //             </p>
    //           </div>
    //           <div className="content">
    //             <div className="contentBar">
    //               <Tafdbs defaultValue="Top Navigation Bar" className="w-full">
    //                 <ScrollArea className="w-full whitespace-nowrap">
    //                   <div className="flex justify-between items-center pb-4 px-4">
    //                     <TabsList
    //                       id="tabs"
    //                       style={{ backgroundColor: "#F2F2F2", width: "100%" }}
    //                       className="justify-start items-start flex w-full lg:gap-4 xl:gap-4 md:gap-2 sm:gap-2 h-fit"
    //                     >
    //                       <TabsTrigger
    //                         value="Top Navigation Bar"
    //                         style={{
    //                           backgroundColor: "#F2F2F2",
    //                           fontWeight: "400",
    //                           fontSize: "11px",
    //                         }}
    //                         className=" py-2 w-fit me-1 data-[state=active]:border-b-2 border-[black]"
    //                       >
    //                         Top Navigation Bar
    //                       </TabsTrigger>
    //                       <TabsTrigger
    //                         value="Sidebar Navigation"
    //                         style={{
    //                           backgroundColor: "#F2F2F2",
    //                           fontWeight: "400",
    //                           fontSize: "11px",
    //                         }}
    //                         className="w-fit data-[state=active]:border-b-2 border-[black]  py-2 "
    //                       >
    //                         Sidebar Navigation{" "}
    //                       </TabsTrigger>
    //                       <TabsTrigger
    //                         value="Bottom Tab Bar"
    //                         style={{
    //                           backgroundColor: "#F2F2F2",
    //                           fontWeight: "400",
    //                           fontSize: "11px",
    //                         }}
    //                         className="w-fit data-[state=active]:border-b-2 border-[black]  py-2 "
    //                       >
    //                         Bottom Tab Bar{" "}
    //                       </TabsTrigger>
    //                       <TabsTrigger
    //                         value="Contextual Nav Toolbar"
    //                         style={{
    //                           backgroundColor: "#F2F2F2",
    //                           fontWeight: "400",
    //                           fontSize: "11px",
    //                         }}
    //                         className="w-fit data-[state=active]:border-b-2 border-[black]  py-2 "
    //                       >
    //                         Contextual Nav Toolbar{" "}
    //                       </TabsTrigger>
    //                     </TabsList>
    //                   </div>
    //                   <ScrollBar orientation="horizontal" />
    //                 </ScrollArea>
    //                 <div className="-md bg-white px-4">
    //                   <TabsContent value="Top Navigation Bar">
    //                     <TopNavigation />
    //                   </TabsContent>
    //                   <TabsContent value="Sidebar Navigation">
    //                     <SidebarNavigation />
    //                   </TabsContent>
    //                   <TabsContent value="Bottom Tab Bar">
    //                     <BottomTabBar />
    //                   </TabsContent>
    //                   <TabsContent value="Contextual Nav Toolbar">
    //                     <ContextNavToolbar />
    //                   </TabsContent>
    //                 </div>
    //               </Tafdbs>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
