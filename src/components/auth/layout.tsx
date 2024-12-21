import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return (
        <div className="grid grid-cols-2 gap-x-10 max-w-[1344px] mx-auto py-8">
            <div className="">
                <div className="w-[60%] h-full mx-auto flex flex-col justify-between">
                    <div>
                        <img src="/logo.svg" alt="" />
                    </div>

                    <div className="h-[55%]">
                        <Outlet/>
                    </div>

                    <div className="foote flex justify-between font-base font-lato text-primary50" >
                        <div className="left">
                            <p className="sm:flex-col">© 2024  5Starcompany. All rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/authImg.svg" alt="" />
            </div>
        </div>
    );
};