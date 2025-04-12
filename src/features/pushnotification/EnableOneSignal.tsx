import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateOneSignal } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

type TInitialValue = "enable" | "disable";

export default function EnableOneSignal() {
    const dispatch = useAppDispatch();
    const oneSignal = useAppSelector((state: RootState) => state.apps.notification.oneSignal);

    const enableOneSignal: TInitialValue = oneSignal.active ? "enable" : "disable";

    const handleChangeEnableOneSignal = (value: TInitialValue) => {
        const isEnableOneSignal = value === "enable";

        dispatch(updateOneSignal({ ...oneSignal, active: isEnableOneSignal }));
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
