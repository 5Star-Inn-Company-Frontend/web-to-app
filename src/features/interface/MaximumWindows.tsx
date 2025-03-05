import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateInterface } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function MaximumWindows() {
    const dispatch = useAppDispatch();
    const maxWindow = useSelector((state: RootState) => state.app.interface.maximum_window);

    const initialMaxWindow = useMemo(() => (maxWindow ? "enable" : "disable"), [maxWindow]);
    const [enableMaxWindow, setEnableMaxWindow] = useState(initialMaxWindow);

    const handleChangeEnableMaxWindow = (status: string) => {
        setEnableMaxWindow(status);
        const isMaxWindowEnabled = status === "enable";
        dispatch(updateInterface({ maximum_window: isMaxWindowEnabled }));
    };

    return (
        <div className="p-4 pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Maximum windows"
                subTitle={`Set a maximum number of windows that are opened simultaneously to improve performance for resource-intensive apps. Once the maximum number of windows has been reached, then previously opened windows will be automatically closed starting with the window that was open first. Enable "Auto Close" so that when your primary website URL (app home screen) is opened, all other previously opened windows will be automatically closed.`}
            >
                <div className="px-8">
                    <RadioGroup
                        className="flex justify-between border p-[0.5rem] flex-grow rounded-md w-fit gap-8"
                        value={enableMaxWindow}
                        onValueChange={handleChangeEnableMaxWindow}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="disable" id="r1" />
                            <Label htmlFor="disable">Disable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label htmlFor="enable">Enable</Label>
                        </div>
                    </RadioGroup>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
