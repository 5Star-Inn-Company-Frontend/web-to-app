import { fetchApp } from "@/api/app";
import { Text } from "@/components/global/text";
import { Navbar } from "@/components/Navbar";
import RouteLink from "@/components/RouteLink";
import { Simulation } from "@/components/Simulation";
import { Button } from "@/components/ui/button";
import { setAppData } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { IEditAppResponse } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";

const AppDashboard = () => {
    const { id } = useParams();
    const appId = Number(id);

    const dispatch = useAppDispatch();

    const { data, isLoading, isSuccess } = useQuery<IEditAppResponse>({
        queryKey: ["app", appId],
        queryFn: () => fetchApp(appId),
        enabled: !!id,
    });

    if (isSuccess) {
        dispatch(setAppData(data.data));
    }

    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="w-[75%] px-4">
                    <DashboardHeader />
                    <div className="flex rounded-t-md bg-white">
                        <DashboardNav id={appId} />
                        <div className="flex-1">
                            {isLoading ? <div>Loading........</div> : <Outlet context={data} />}
                        </div>
                    </div>
                </div>
                <div className="w-[28%]">
                    <Simulation />
                </div>
            </div>
        </>
    );
};

export default AppDashboard;

const DashboardHeader = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <div className="flex gap-2 items-center text-lg font-semibold">
                <div className="w-11 h-11">
                    <img src="/brandicon.svg" alt="object not found" className="w-full" />
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
    );
};

interface IDashboardNav {
    id: number;
}
const DashboardNav = ({ id }: IDashboardNav) => {
    const Routes = [
        {
            name: "Overview",
            route: `app/${id}/overview`,
            icon: "home_icon.svg",
        },
        {
            name: "Branding",
            route: `app/${id}/branding`,
            icon: "branding_icon.svg",
        },
        {
            name: "Link Handling",
            route: `app/${id}/link_handling`,
            icon: "link_icon.svg",
        },
        {
            name: "Interface",
            route: `app/${id}/interface`,
            icon: "interface_icon.svg",
        },
        {
            name: "Website Overides",
            route: `app/${id}/web_overrides`,
            icon: "website_icon.svg",
        },
        {
            name: "Permissions",
            route: `app/${id}/app_permission`,
            icon: "permission_icon.svg",
        },
        {
            name: "Native Navigation",
            route: `app/${id}/native_navigation`,
            icon: "native_icon.svg",
        },
        {
            name: "Push Notification",
            route: `app/${id}/push_notification`,
            icon: "notification_icon.svg",
        },
        {
            name: "Native Pluggins",
            route: `app/${id}/native_plugins`,
            icon: "plugin_icon.svg",
        },
        {
            name: "Build & Download",
            route: `app/${id}/app_download`,
            icon: "download_icon.svg",
        },
        {
            name: "Services",
            route: `app/${id}/app_service`,
            icon: "services_icon.svg",
        },
        {
            name: "Support",
            route: `app/${id}/app_support`,
            icon: "support_icon.svg",
        },
        {
            name: "Plan",
            route: `app/${id}/app_plan`,
            icon: "plan_icon.svg",
        },
        {
            name: "Access",
            route: `app/${id}/app_access`,
            icon: "access_icon.svg",
        },
    ];
    return (
        <div className="w-[25%] py-6 border-r border-primary20 overflow-y-auto no-scrollbar">
            <div className="flex justify-between items-center mb-7 px-4">
                <Text style="font-medium text-xs text-primary40" value="CONFIGURATION" />
                <div className="bg-deepgray rounded-full p-1">
                    <img src="/chevron-left.svg" alt="" />
                </div>
            </div>
            <nav>
                <ul className="relative m-0 list-none px-2">
                    {Routes.map((link, index) => {
                        const { name, route, icon } = link;
                        return <RouteLink key={index} name={name} route={route} icon={icon} />;
                    })}
                </ul>
            </nav>
        </div>
    );
};
