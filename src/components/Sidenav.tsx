import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Text } from "@/components/global/text";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { RouteBtn } from "./global/routeBtn";

export const SideNav = ({ style}: { style?: string }) => {
  // const action = "create";
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const init = async () => {
      const { Sidenav, Ripple, Tab, initTE } = await import("tw-elements");
      initTE({ Sidenav, Ripple, Tab });
    };
    init();
  }, []);
  const Routes = [
    {
      name: "App",
      route: "",
      icon: (
        "phone-icon.png"
      ),
    },
    {
      name: "Members",
      route: "/members",
      icon: (
        "users-icon.png"
      ),
    },
    {
      name: "Settings",
      route: "/settings",
      icon: (
        "settings-icon.png"
      ),
    },
    {
      name: "Create New app",
      route: `/overview`,
      icon: (
        "create-icon.png"
      ),
    },
  ];

  return (
    <nav
      id={`${style ? "" : "full-screen-example"}`}
      className={`${
        style
          ? style
          : "sidenav bg-white fixed left-0 top-0 md:top-0 z-[500] h-screen -translate-x-full overflow-auto shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"} p-4 border"
      } p-4 `}
      data-te-sidenav-init
      data-te-sidenav-content="#content"
    >
      <div>
        <div className="flex justify-between items-center">
          <Text
            style="text-sm text-start text-[grey]"
            value="ODEJINMI SAMUEL"
          />
          <div className="bg-[#f9fafb] rounded-full p-2">
            <AiOutlineDoubleRight color="#6E6E82" size="1rem" />
          </div>
        </div>
        <ul
          className="relative my-4 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
          {Routes.map((link, index) => {
            const { name, route, icon } = link;
            return (
              <RouteBtn
                key={index}
                name={name}
                route={route}
                icon={icon}
                pathname={pathname}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
