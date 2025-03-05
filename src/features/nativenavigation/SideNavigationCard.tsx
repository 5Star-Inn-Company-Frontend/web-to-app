import { FaAndroid, FaApple } from "react-icons/fa6";
import SideNavColorScheme from "./sideNavgationTab/SideNavColorScheme";
import SidebarImage from "./sideNavgationTab/SidebarImage";
import SidebarFont from "./sideNavgationTab/SidebarFont";

interface SideNavigationCardProps {
    os: "IOS" | "Android";
    radios: { title: string; label: string }[];
    title: string;
}

export const SideNavigationCard = ({ os, radios, title }: SideNavigationCardProps) => {
    return (
        <div className="rounded-md border border-primary20">
            <div className="flex text-sm gap-2 items-center px-2 py-2 border-b border-primary20 rounded-t-md">
                {os === "IOS" ? <FaApple size="1.3rem" /> : <FaAndroid size="1.3rem" />}
                {os}
            </div>
            <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                    <SidebarImage radios={radios} title={title} />
                    <SidebarFont />
                </div>

                <div className="border border-primary20 rounded-lg mt-4 px-4 pb-5">
                    <div className="grid grid-cols-2 gap-x-3 mb-5">
                        <SideNavColorScheme mode="LIGHT MODE" img="/light-logo.png" />
                        <SideNavColorScheme mode="DARK MODE" img="/dark-logo.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};
