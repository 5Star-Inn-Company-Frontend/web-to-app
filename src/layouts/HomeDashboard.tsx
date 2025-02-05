import { Navbar } from "@/components/Navbar";
import Sidebar from "@/features/maindashboard/sidebar";
import { Outlet } from "react-router-dom";

const HomeDashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="flex h-screen overflow-hidden p-6">
                {/* Sidebar */}
                <Sidebar />
                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-6 no-scrollbar rounded-r-md bg-white">
                    <div className="space-y-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDashboard;
