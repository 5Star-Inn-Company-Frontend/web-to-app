import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

import { BsArrowRightShort } from "react-icons/bs";

export default function AppID() {
    const appID = useAppSelector(
        (state: RootState) => state.apps.notification.oneSignal.applicationId
    );

    return (
        <CollapseableWithArrow title="App-ID ">
            <p className="text-sm text-primary60 mb-4">
                Median requires just your OneSignal App Id to configure OneSignal to send
                notifications to your app. You will find this on your OneSignal Dashboard under App
                Settings{" "}
                <span className="inline-flex items-center text-sm">
                    <BsArrowRightShort /> Keys & IDs.
                </span>
            </p>
            <Input
                value={appID}
                readOnly
                className="px-2 w-[70%]"
                placeholder="xxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            />
        </CollapseableWithArrow>
    );
}
