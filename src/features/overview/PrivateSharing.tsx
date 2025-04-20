import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";

export default function PrivateSharing() {
    const appState = useAppSelector((state: RootState) => state.apps.appState);

    const [privateLink, setPrivateLink] = useState(appState.private_link || "");

    useEffect(() => {
        setPrivateLink(appState.private_link);
    }, [appState.private_link]);

    return (
        <div className="pb-4 xl:p-4 bg-white border-t border-primary20">
            <CollapsibleComponent title="Private Management Link">
                <div className="flex items-center gap-4 px-8">
                    <Text style="text-sm" value={privateLink} />
                    <AiOutlineCopy />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
