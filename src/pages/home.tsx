import { SearchBar } from "@/components/global/searchInput";
import { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
import SelectDropdown from "@/components/global/selectdropdown";
import { AppDetails } from "@/features/app/AppDetails";
import { useQuery } from "@tanstack/react-query";
import { fetchApps } from "@/api/app";
import { IAppData, IAppState } from "@/types/type";
import { Skeleton } from "@/components/ui/skeleton";

export const DashboardHome = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

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

    // Filter apps based on search term
    const filteredApps = useMemo(() => {
        if (!isSuccess || !data?.data) return [];

        return data.data.filter((app: IAppData) => {
            return (
                searchTerm === "" ||
                app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (app.description &&
                    app.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        });
    }, [data, isSuccess, searchTerm]);

    return (
        <>
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
                        {filteredApps.length > 0 ? (
                            filteredApps.map((item: IAppState) => (
                                <AppDetails key={item.id} {...item} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500 py-10">
                                {searchTerm
                                    ? `No apps found matching "${searchTerm}"`
                                    : "No apps available"}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
