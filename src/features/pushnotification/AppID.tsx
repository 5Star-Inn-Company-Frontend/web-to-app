import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Input } from "@/components/ui/input";
import { updateAppId } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { debounce } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function AppID() {
    const dispatch = useAppDispatch();
    const appID_Store = useAppSelector((state: RootState) => state.apps.notification.app_id);

    const initialValue = appID_Store || "";

    const [appID, setAppID] = useState(initialValue);

    useEffect(() => {
        setAppID(initialValue);
    }, [initialValue]);

    const debounceAppId = debounce((appID: string) => {
        dispatch(updateAppId(appID));
    });

    const handleChangeAppID = (e: ChangeEvent<HTMLInputElement>) => {
        const newAppId = e.target.value;
        setAppID(newAppId);
        debounceAppId(newAppId);
    };

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
                onChange={handleChangeAppID}
                className="px-2 w-[70%]"
                placeholder="xxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            />
        </CollapseableWithArrow>
    );
}
