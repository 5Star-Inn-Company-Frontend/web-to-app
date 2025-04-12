import { FaApple } from "react-icons/fa6";
import SideNavColorScheme from "./sideNavgationTab/SideNavColorScheme";
import SidebarImage from "./sideNavgationTab/SidebarImage";
import SidebarFont from "./sideNavgationTab/SidebarFont";

export const SideNavigationCard = () => {
    return (
        <div className="rounded-md border border-primary20">
            <div className="flex text-sm gap-2 items-center px-2 py-2 border-b border-primary20 rounded-t-md">
                <FaApple size="1.3rem" />
                IOS
            </div>
            <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                    <SidebarImage />
                    <SidebarFont />
                </div>

                <div className="border border-primary20 rounded-lg mt-4 px-4 pb-5">
                    <div className="grid grid-cols-2 gap-x-3 mb-5">
                        <SideNavColorScheme mode="light" img="/light-logo.png" />
                        <SideNavColorScheme mode="dark" img="/dark-logo.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};
