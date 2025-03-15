import { Navbar } from "@/components/Navbar";
import Sidebar from "@/features/maindashboard/sidebar";
import PrivateRoute from "@/PrivateRoute";
import { Outlet } from "react-router-dom";

const HomeDashboard = () => {
    return (
        <PrivateRoute>
            <Navbar />
            <div className="flex h-screen overflow-hidden xl:p-6">
                {/* Sidebar */}
                <Sidebar />
                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-6 no-scrollbar rounded-r-md bg-white">
                    <div className="space-y-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default HomeDashboard;
