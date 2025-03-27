import { Navbar } from "../Navbar";
import { Simulation } from "../Simulation";
import DashboardHeader from "@/features/layout/DashboardHeader";
import CreateAppForm from "@/features/createapp/CreateAppForm";

export function CreateApp() {
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="w-full xl:w-[75%] px-4">
                    <DashboardHeader />
                    <CreateAppForm />
                </div>
                <div className="hidden xl:block xl:w-[28%]">
                    <Simulation />
                </div>
            </div>
        </>
    );
}
