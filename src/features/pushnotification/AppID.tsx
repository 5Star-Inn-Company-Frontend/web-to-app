import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Input } from "@/components/ui/input";
import { BsArrowRightShort } from "react-icons/bs";

export default function AppID() {
    return (
        <CollapseableWithArrow title="App-ID ">
            <p className="text-sm text-primary60 mb-4">
                Median requires just your OneSignal App Id to configure OneSignal to send notifications to your app. You
                will find this on your OneSignal Dashboard under App Settings{" "}
                <span className="inline-flex items-center text-sm">
                    <BsArrowRightShort /> Keys & IDs.
                </span>
            </p>
            <Input className="px-2 w-[70%]" placeholder="xxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
        </CollapseableWithArrow>
    );
}
