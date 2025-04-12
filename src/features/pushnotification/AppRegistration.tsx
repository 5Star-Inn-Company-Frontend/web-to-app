import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateOneSignal } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function AppRegistration() {
    const dispatch = useAppDispatch();
    const oneSignal = useAppSelector((state: RootState) => state.apps.notification.oneSignal);

    const autoRegister = oneSignal.autoRegister ? "enable" : "disable";

    const handleEnableRegister = (value: string) => {
        const isAutoRegisterEnabled = value === "enable";

        dispatch(updateOneSignal({ ...oneSignal, autoRegister: isAutoRegisterEnabled }));
    };

    return (
        <CollapseableWithArrow title="Automatic Registration">
            <p className="text-sm text-primary60 mb-4">
                By default, on first launch your app will automatically register for push
                notifications and prompt for user consent. When set to manual, you must initiate
                registration using the JavaScript Bridge.
            </p>
            <RadioGroup
                value={autoRegister}
                onValueChange={handleEnableRegister}
                className="inline-flex items-center gap-x-20 p-1 rounded-md border"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disable" id="r1" />
                    <Label className="text-xs text-primary40" htmlFor="r1">
                        Automatic
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enable" id="r2" />
                    <Label className="text-xs text-primary40" htmlFor="r2">
                        Manual
                    </Label>
                </div>
            </RadioGroup>
        </CollapseableWithArrow>
    );
}
