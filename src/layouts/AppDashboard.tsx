import { Text } from "@/components/global/text"
import { Navbar } from "@/components/Navbar"
import RouteLink from "@/components/RouteLink"
import { Simulation } from "@/components/Simulation"
import { Button } from "@/components/ui/button"
import { Outlet, useParams } from "react-router-dom"


const AppDashboard = () => {

    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="w-[75%] px-4">
                    <DashboardHeader />
                    <div className="flex rounded-t-md bg-white">
                        <DashboardNav />
                        <div className="flex-1">
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="w-[28%]">
                    <Simulation />
                </div>
            </div>
        </>
    )
}

export default AppDashboard


const DashboardHeader = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <div className="flex gap-2 items-center text-lg font-semibold">
                <div className="w-11 h-11">
                    <img
                        src="/brandicon.svg"
                        alt="object not found"
                        className="w-full"
                    />
                </div>
                <h1>WebHosting App</h1>
            </div>
            <div className="flex ml-auto gap-4 items-center">
                <Text style="text-xs text-[grey]" value="Last saved 12days ago" />
                <Button className="bg-black">Done Editing</Button>
                <button className="border flex items-center justify-center py-2 px-4 rounded-lg">
                    {/* <AiOutlineMore size="1.2rem" /> */}
                    <img src="/3dots2.svg" alt="" className="" />
                </button>
            </div>
        </div>
    )
}


const DashboardNav = () => {
    const { action } = useParams();

    const Routes = [
        {
            name: 'Overview',
            route: `/edit/overview`,
            icon: 'home_icon.png',
        },
        {
            name: 'Branding',
            route: `/${action}/branding`,
            icon: 'secondnav_icon.png',
        },
        {
            name: 'Link Handling',
            route: `/${action}/link_handling`,
            icon: 'thirdnav_icon.png',
        },
        {
            name: 'Interface',
            route: `/${action}/interface`,
            icon: 'forthnav_icon.png',
        },
        {
            name: 'Website Overides',
            route: `/${action}/web_overides`,
            icon: 'fifthnav_icon.png',
        },
        {
            name: 'Permissions',
            route: `/${action}/app_permission`,
            icon: 'sixthnav_icon.png',
        },
        {
            name: 'Native Navigation',
            route: `/${action}/native_navigation`,
            icon: 'seventhnav_icon.png',
        },
        {
            name: 'Push Notification',
            route: `/${action}/push_notification`,
            icon: 'eightnav_icon.png',
        },
        {
            name: 'Native Pluggins',
            route: `/${action}/native_plugins`,
            icon: 'ninthnav_icon.png',
        },
        {
            name: 'Build & Download',
            route: `/${action}/appdownload`,
            icon: 'tenthnav_icon.png',
        },
        {
            name: 'Services',
            route: `/${action}/app_service`,
            icon: 'eleventhnav_icon.png',
        },
        {
            name: 'Support',
            route: `/${action}/app_support`,
            icon: 'twelvethnav_icon.png',
        },
        {
            name: 'Plan',
            route: `/${action}/app_plan`,
            icon: 'thirteenthnav_icon.png',
        },
        {
            name: 'Access',
            route: `/${action}/app_access`,
            icon: 'fortheenthnav_icon.png',
        },
    ];
    return (
        <div className="w-[25%] py-6 border-r border-primary20 overflow-y-auto no-scrollbar">
            <div className="flex justify-between items-center mb-7 px-4">
                <Text
                    style="font-medium text-xs text-primary40"
                    value="CONFIGURATION"
                />
                <div className="bg-deepgray rounded-full p-1">
                    <img src="/chevron-left.svg" alt="" />
                </div>
            </div>
            <nav >
                <ul className="relative m-0 list-none px-2">
                    {Routes.map((link, index) => {
                        const { name, route, icon } = link;
                        return (
                            <RouteLink
                                key={index}
                                name={name}
                                route={route}
                                icon={icon}
                            />
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}