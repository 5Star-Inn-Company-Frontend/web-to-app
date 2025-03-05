import { Text } from "@/components/global/text";
import RouteLink from "@/components/RouteLink";

interface IDashboardNav {
    id: number;
}

export default function DashboardNav({ id }: IDashboardNav) {
    // ROUTES

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
}
