import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateSignal } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

type TInitialValue = "enable" | "disable";

export default function EnableOneSignal() {
    const dispatch = useAppDispatch();
    const notificationStore = useAppSelector((state: RootState) => state.apps.notification);

    const initialValue: TInitialValue = notificationStore.signal ? "enable" : "disable";

    const [enableOneSignal, setEnableOneSignal] = useState<TInitialValue>(initialValue);

    useEffect(() => {
        setEnableOneSignal(initialValue);
    }, [initialValue]);

    const handleChangeEnableOneSignal = (value: TInitialValue) => {
        setEnableOneSignal(value);

        const isEnableOneSignal = value === "enable";

        dispatch(updateSignal(isEnableOneSignal));
    };

    return (
        <CollapseableWithArrow title="Enable One Signal">
            <RadioGroup
                value={enableOneSignal}
                onValueChange={handleChangeEnableOneSignal}
                className="inline-flex items-center gap-x-20 p-1  rounded-md border"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disable" id="r1" />
                    <Label className="text-xs text-primary40" htmlFor="r1">
                        Disable
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enable" id="r2" />
                    <Label className="text-xs text-primary40" htmlFor="r2">
                        Enable
                    </Label>
                </div>
            </RadioGroup>
        </CollapseableWithArrow>
    );
}
