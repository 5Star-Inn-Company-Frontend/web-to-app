import { SearchBar } from "@/components/global/searchInput";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import SelectDropdown from "@/components/global/selectdropdown";
import { AppDetails } from "@/features/app/AppDetails";
import { useQuery } from "@tanstack/react-query";
import { fetchApps } from "@/api/app";
import { IAppData } from "@/types/type";
import { Skeleton } from "@/components/ui/skeleton";

export const DashboardHome = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    // const navigate = useNavigate();

    const [licenseSelectedValue, setLicenseSelectedValue] = useState<string>("");
    const [accessSelectedValue, setAccessSelectedValue] = useState<string>("");

    const handleLicenseChange = (value: string) => {
        setLicenseSelectedValue(value);
    };
    const handleAccessChange = (value: string) => {
        setAccessSelectedValue(value);
    };

    const licenseOptions = [
        { value: "Free", label: "Free" },
        { value: "Basic", label: "Basic" },
        { value: "Gold", label: "Gold" },
        { value: "Premium", label: "Premium" },
    ];

    const accessOptions = [
        { value: "Admin", label: "Admin" },
        { value: "Developer", label: "Developer" },
        { value: "View", label: "View" },
    ];

    // =======================================
    // Fetch all Apps
    const { isLoading, isSuccess, data } = useQuery({
        queryKey: ["apps"],
        queryFn: () => fetchApps(),
    });

    return (
        <>
            {/* <div className="menu lg:hidden xl:hidden md:block sm:block mb-3 ">
                <a
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBackdrop"
                    aria-controls="offcanvasWithBackdrop"
                >
                    <i className="fa-solid fa-bars text-2xl"></i>
                </a>
                <div
                    className="offcanvas offcanvas-start pl-3 "
                    tabIndex={-1}
                    id="offcanvasWithBackdrop"
                    aria-labelledby="offcanvasWithBackdropLabel"
                >
                    <div className="offcanvas-header">
                        <div className="header flex gap-5 mt-4">
                            <h2 className="offcanvas-title font-semibold text-xl" id="offcanvasWithBackdropLabel">
                                Odejinmi Samuel`s <br /> Team
                            </h2>
                            <img src="/right-arrow.png" alt="" className="w-[2em] h-[2em]" />
                        </div>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body flex flex-col gap-4">
                        <div
                            className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl"
                            onClick={() => navigate("/app")}
                        >
                            <img src="/phone-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
                            <p>Apps</p>
                        </div>
                        <div
                            className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl"
                            onClick={() => navigate("/app/members")}
                        >
                            <img src="/users-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
                            <p>Members</p>
                        </div>
                        <div
                            className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl"
                            onClick={() => navigate("/app/settings")}
                        >
                            <img src="/settings-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
                            <p>Settings</p>
                        </div>
                        <div
                            className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl"
                            onClick={() => navigate("/app/overview")}
                        >
                            <img src="/create-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
                            <p>Create New App</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="mb-5">
                <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} classname="mb-4" />
                <div className="flex justify-between items-center gap-x-5 max-w-sm">
                    <SelectDropdown
                        selectedValue={licenseSelectedValue}
                        onChange={handleLicenseChange}
                        options={licenseOptions}
                        placeholder="License Type"
                    />
                    <SelectDropdown
                        selectedValue={accessSelectedValue}
                        onChange={handleAccessChange}
                        options={accessOptions}
                        placeholder="My Access"
                    />
                </div>

                {isLoading && (
                    <div className="my-9 flex flex-col space-y-5">
                        <Skeleton className="h-[100px] w-full rounded-xl" />
                        <Skeleton className="h-[100px] w-full rounded-xl" />
                        <Skeleton className="h-[100px] w-full rounded-xl" />
                        <Skeleton className="h-[100px] w-full rounded-xl" />
                    </div>
                )}

                {isSuccess && (
                    <div className="my-9 grid gap-4">
                        {data.data.map((item: IAppData) => (
                            <AppDetails key={item.id} {...item} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
