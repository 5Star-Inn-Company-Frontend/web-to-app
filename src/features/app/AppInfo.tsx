import { AndroidIcon, IosIcon } from "@/components/icons/PlatformIcon";

interface AppInfoProps {
    plan: string;
    ios: string;
    android: string;
}

const AppInfo = ({ plan, ios, android }: AppInfoProps) => {
    return (
        <div className="flex items-center gap-7 sm:gap-3 lg:flex xl:flex md:flex-row sm:flex-col sm:mr-auto sm:items-start">
            <span className="bg-lightgreen text-lightgreen1 rounded-[23px] px-10 py-0.5 font-medium text-base capitalize">
                {plan}
            </span>
            <div className="flex items-center gap-2">
                <IosIcon />
                <span className="text-xs font-medium">{ios}</span>
            </div>
            <div className="flex items-center gap-2">
                <AndroidIcon />
                <span className="text-xs font-medium">{android}</span>
            </div>
        </div>
    )
}

export default AppInfo