import { DownloadDirConfigCard } from "@/components/customui/app/app_permission/download_dircard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";

export default function DownloadDirectory() {
    return (
        <div className="px-6 py-4 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Download Directory"
                subTitle="Android requires permission to allow downloading to the device public downloads directory. Otherwise, downloaded files will only be accessible within the app."
            >
                <div className="w-1/2 px-8">
                    <OsConfigCard os="Android">
                        <DownloadDirConfigCard />
                    </OsConfigCard>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
