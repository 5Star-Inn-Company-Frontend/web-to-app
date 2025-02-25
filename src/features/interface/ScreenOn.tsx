import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateInterface } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function ScreenOn() {
    const dispatch = useAppDispatch();
    const keepScreenOn = useSelector((state: RootState) => state.app.interface.screen_on);

    const initialValue = useMemo(() => (keepScreenOn ? "on" : "off"), [keepScreenOn]);
    const [enableKeepScreenOn, setEnableKeepScreenOn] = useState(initialValue);

    const handleChangeEnableKeepScreenOn = (newvalue: string) => {
        setEnableKeepScreenOn(newvalue);
        const keepScreenOnEnabled = newvalue === "on";
        dispatch(updateInterface({ screen_on: keepScreenOnEnabled }));
    };
    return (
        <div className="p-4 pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Kepp Screen On"
                subTitle="Keep the device screen on all the time for many purposes such as a in-vehicle display app, museum kiosk app, trade show demo, etc. In addition to an app configuration which will be enabled at all times this setting can also be set and cleared via the JavaScript Bridge."
            >
                <div className="px-8">
                    <RadioGroup
                        className="flex w-fit gap-8 justify-between border p-[0.7rem]  rounded-md"
                        value={enableKeepScreenOn}
                        onValueChange={handleChangeEnableKeepScreenOn}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="off" id="r1" />
                            <Label htmlFor="off">Off</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="on" id="r2" />
                            <Label htmlFor="on">On</Label>
                        </div>
                    </RadioGroup>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
