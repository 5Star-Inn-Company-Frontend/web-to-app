import { fetchApp } from "@/api/app";
import { Navbar } from "@/components/Navbar";
import { Simulation } from "@/components/Simulation";
import DashboardHeader from "@/features/layout/DashboardHeader";
import DashboardNav from "@/features/layout/DashboardNav";
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
                        <div className="flex-1">{isLoading ? <div>Loading........</div> : <Outlet />}</div>
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
