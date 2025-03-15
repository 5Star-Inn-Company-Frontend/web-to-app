import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return (
        <div className="px-8 xl:grid xl:grid-cols-2 xl:gap-x-10 max-w-[1344px] mx-auto py-8">
            <div className="">
                <div className="xl:w-[60%] h-full mx-auto flex flex-col justify-between">
                    <div>
                        <img src="/logo.svg" alt="" className="w-[35%] mb-10 xl:mb-0" />
                    </div>

                    <div className="h-[55%]">
                        <Outlet />
                    </div>

                    <div className="foote flex justify-between font-base font-lato text-primary50">
                        <div className="left">
                            <p className="sm:flex-col">© 2024 5Starcompany. All rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden xl:block">
                <img src="/authImg.svg" alt="" />
            </div>
        </div>
    );
};
