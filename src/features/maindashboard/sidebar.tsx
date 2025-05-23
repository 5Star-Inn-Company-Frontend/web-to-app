import { RouteBtn } from "@/components/global/routeBtn";
import { Text } from "@/components/global/text";
import {
    SheetDescription,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { Sheet } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Routes = [
    {
        name: "App",
        route: "",
        icon: "phone-icon.png",
    },
    {
        name: "Members",
        route: "members",
        icon: "users-icon.png",
    },
    {
        name: "Settings",
        route: "settings",
        icon: "settings-icon.png",
    },
    {
        name: "Create New app",
        route: `app/create`,
        icon: "create-icon.png",
    },
];

export default function Sidebar() {
    return (
        <>
            <div className="hidden lg:block w-80 bg-white p-4  h-full border-r rounded-l-md border-primary20">
                <div className="flex justify-between items-center mt-4 mb-11">
                    <Text style="text-2xl font-bold" value="Odejinmi Samuel’s Team" />
                    <div className="bg-deepgray rounded-full p-2">
                        <img src="/chevron-left.svg" alt="" />
                    </div>
                </div>
                <ul className="grid gap-y-4" data-te-sidenav-menu-ref>
                    {Routes.map((link, index) => {
                        const { name, route, icon } = link;
                        return <RouteBtn key={index} name={name} route={route} icon={icon} />;
                    })}
                </ul>
            </div>
            <div className="block lg:hidden">
                <Sheet key="left">
                    <SheetTrigger className="px-5 mb-3 mt-5">
                        <HamburgerMenuIcon className="h-[25px] w-[25px]" />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle className="mb-4">
                                <Text style="text-2xl font-bold" value="Odejinmi Samuel’s Team" />
                            </SheetTitle>
                            <SheetDescription>
                                <ul className="grid gap-y-4" data-te-sidenav-menu-ref>
                                    {Routes.map((link, index) => {
                                        const { name, route, icon } = link;
                                        return (
                                            <RouteBtn
                                                key={index}
                                                name={name}
                                                route={route}
                                                icon={icon}
                                            />
                                        );
                                    })}
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
