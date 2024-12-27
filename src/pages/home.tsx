import { AppDetails } from "@/components/customui/app/dashboard/AppDetails";
import { SearchBar } from "@/components/global/searchInput";
import { useState } from "react";
import logo from "@/components/images/Frame 14.png"
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "@/layouts/AppDashboardlayout";
import SelectDropdown from "@/components/global/selectdropdown";

export const DashboardHome = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const [licenseSelectedValue, setLicenseSelectedValue] = useState<string>("")
  const [accessSelectedValue, setAccessSelectedValue] = useState<string>("")

  const handleLicenseChange = (value: string) => {
    setLicenseSelectedValue(value)
  }
  const handleAccessChange = (value: string) => {
    setAccessSelectedValue(value)
  }

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

  const app = [
    {
      id: 1,
      logo: logo,
      title: "WebhostingApp",
      plan: "free",
      ios: "co.5start.ios.qlije",
      android: "co.5start.android.qlije",
      user: "Admin",
      members: 2,
      lastSaved: "Last saved 12 days ago",
    },
    {
      id: 2,
      logo: logo,
      title: "WebhostingApp",
      plan: "free",
      ios: "co.5start.ios.qlije",
      android: "co.5start.android.qlije",
      user: "Admin",
      members: 2,
      lastSaved: "Last saved 12 days ago",
    },
    {
      id: 3,
      logo: logo,
      title: "WebhostingApp",
      plan: "free",
      ios: "co.5start.ios.qlije",
      android: "co.5start.android.qlije",
      user: "Admin",
      members: 2,
      lastSaved: "Last saved 12 days ago",
    },
    {
      id: 4,
      logo: logo,
      title: "WebhostingApp",
      plan: "free",
      ios: "co.5start.ios.qlije",
      android: "co.5start.android.qlije",
      user: "Admin",
      members: 2,
      lastSaved: "Last saved 12 days ago",
    },
  ];

  return (
    <>
      <div className="menu lg:hidden xl:hidden md:block sm:block mb-3 ">
        <a className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i className="fa-solid fa-bars text-2xl" ></i></a>
        <div className="offcanvas offcanvas-start pl-3 " tabIndex={-1} id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
          <div className="offcanvas-header">
            <div className="header flex gap-5 mt-4">
              <h2 className="offcanvas-title font-semibold text-xl" id="offcanvasWithBackdropLabel">Odejinmi Samuel`s <br /> Team</h2>
              <img src="/right-arrow.png" alt="" className="w-[2em] h-[2em]" />
            </div>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body flex flex-col gap-4">
            <div className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl" onClick={() => navigate("/app")}>
              <img src="/phone-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
              <p>Apps</p>
            </div>
            <div className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl" onClick={() => navigate("/app/members")}>
              <img src="/users-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
              <p>Members</p>
            </div>
            <div className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl" onClick={() => navigate("/app/settings")}>
              <img src="/settings-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
              <p>Settings</p>
            </div>
            <div className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl" onClick={() => navigate("/app/overview")}>
              <img src="/create-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
              <p>Create New App</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          classname="mb-4"
        />
        <div className="flex justify-between items-center gap-x-5 max-w-sm">
          <SelectDropdown selectedValue={licenseSelectedValue} onChange={handleLicenseChange} options={licenseOptions} placeholder="License Type" />
          <SelectDropdown selectedValue={accessSelectedValue} onChange={handleAccessChange} options={accessOptions} placeholder="My Access" />
        </div>

        <div className="my-9 grid gap-4">
          {app?.map((item) => (
            <AppDetails key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
