import { fetchApp } from "@/api/app";
import { Navbar } from "@/components/Navbar";
import { Simulation } from "@/components/Simulation";
import { Sheet, SheetContent, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import DashboardHeader from "@/features/layout/DashboardHeader";
import DashboardNav from "@/features/layout/DashboardNav";
import { updateAppState } from "@/redux/app/appStateSlice";
import { defaultBrandingState, setBranding } from "@/redux/app/brandSlice";
import { defaultBuildSettings, setBuildSettings } from "@/redux/app/buildSettingSlice";
import { defaultInterfaceSliceState, updateInterface } from "@/redux/app/interfaceSlice";
import { defaultLinkHandlingState, setLinkHandling } from "@/redux/app/linkHandlingSlice";
import { defaultNavigationState, updateNavigation } from "@/redux/app/NavigationSlice";
import { defaultNotificationState, setNotification } from "@/redux/app/NotificationSlice";
import { defaultPermissionState, setPermission } from "@/redux/app/permissionSlice";
import { defaultWebsiteOverideState, setWebsiteOveride } from "@/redux/app/websiteOverideSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { closeMobileSimulator } from "@/redux/nav/navslice";
import { RootState } from "@/redux/store";
import { IEditAppResponse } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";

const AppDashboard = () => {
    const { id } = useParams();
    const appId = Number(id);

    const dispatch = useAppDispatch();
    const isSimulatorOpen = useAppSelector((state: RootState) => state.nav.isSimulatorOpen);

    const persistedAppState = useAppSelector((state: RootState) => state.apps.appState);

    const { data, isLoading, isSuccess } = useQuery<IEditAppResponse>({
        queryKey: ["app", appId],
        queryFn: () => fetchApp(appId),
        enabled: !!id && !persistedAppState.id,
        staleTime: Infinity,
    });

    if (isSuccess) {
        dispatch(
            updateAppState({
                id: data.data.id,
                name: data.data.name,
                description: data.data.description,
                url: data.data.url,
                plan: data.data.plan,
                member_count: data.data.member_count,
                last_saved: data.data.last_saved,
                private_link: data.data.private_link,
                public_link: data.data.public_link,
            })
        );
        dispatch(setBranding(data.data.branding ?? defaultBrandingState));
        dispatch(updateInterface(data.data.interface ?? defaultInterfaceSliceState));
        dispatch(setLinkHandling(data.data.link_handling ?? defaultLinkHandlingState));
        dispatch(updateNavigation(data.data.navigation ?? defaultNavigationState));
        dispatch(setNotification(data.data.notification ?? defaultNotificationState));
        dispatch(setPermission(data.data.permission ?? defaultPermissionState));
        dispatch(setWebsiteOveride(data.data.website_overide ?? defaultWebsiteOverideState));
        dispatch(setBuildSettings(data.data.build_setting ?? defaultBuildSettings));
    }

    const handleOpenChange = (open: boolean) => {
        if (!open) dispatch(closeMobileSimulator());
    };

    return (
        <>
            <Navbar />
            <div className="xl:flex">
                <div className="xl:px-5 xl:w-[75%]">
                    <DashboardHeader />
                    <div className="xl:flex rounded-t-md bg-white">
                        <DashboardNav id={appId} />
                        <div className="xl:flex-1">
                            {isLoading ? <div>Loading........</div> : <Outlet />}
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block xl:w-[28%]">
                    <Simulation />
                </div>
                <Sheet open={isSimulatorOpen} onOpenChange={(open) => handleOpenChange(open)}>
                    <SheetContent className="overflow-auto w-[400px] sm:w-[540px]" side="right">
                        <SheetHeader>
                            <SheetDescription>
                                <Simulation />
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default AppDashboard;
