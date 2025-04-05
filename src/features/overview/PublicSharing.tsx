import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";

export default function PublicSharing() {
    const appState = useAppSelector((state: RootState) => state.apps.appState);

    const [publicLink, setPublicLink] = useState(appState.public_link || "");

    useEffect(() => {
        setPublicLink(appState.public_link);
    }, [appState.public_link]);

    return (
        <div className="pb-4 xl:p-4 bg-white border-t border-primary20">
            <CollapsibleComponent title="Public Sharing">
                <div className="flex items-center gap-4 px-8">
                    <Text style="text-sm" value={publicLink} />
                    <AiOutlineCopy />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
