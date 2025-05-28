import { Navbar } from "../Navbar";
import CreateAppForm from "@/features/createapp/CreateAppForm";

export function CreateApp() {
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="w-full mx-auto xl:w-full px-4">
                    <CreateAppForm />
                </div>
            </div>
        </>
    );
}
