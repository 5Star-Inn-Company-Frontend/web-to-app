import { MembersIcon, PersonIcon } from "@/components/icons/PlatformIcon";

interface AppMetaDataProps {
    user: string;
    members: number;
    lastSaved: string;
}

function AppMetaData({ user, members, lastSaved }: AppMetaDataProps) {
    return (
        <div className="mt-4 flex items-center gap-12">
            <div className="flex items-center gap-2">
                <PersonIcon />
                <span className="text-xs font-medium">{user}</span>
            </div>
            <div className="flex items-center gap-2">
                <MembersIcon />
                <span className="text-xs font-medium">{members || 0}</span>
            </div>
            <span className="text-xs text-[#666666] font-medium">{lastSaved}</span>
        </div>
    );
}

export default AppMetaData;
