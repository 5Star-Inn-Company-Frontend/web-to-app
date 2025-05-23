import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateOneSignal } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function ForegroundNotification() {
    const dispatch = useAppDispatch();
    const oneSignal = useAppSelector((state: RootState) => state.apps.notification.oneSignal);

    const showForegroundNotification = oneSignal.showForegroundNotifications ? "show" : "hide";

    const handleChangeForegroundNotification = (value: string) => {
        const isEnableForegroundNotification = value === "show";
        dispatch(
            updateOneSignal({
                ...oneSignal,
                showForegroundNotifications: isEnableForegroundNotification,
            })
        );
    };

    return (
        <CollapseableWithArrow title="Foreground Notification">
            <RadioGroup
                value={showForegroundNotification}
                onValueChange={handleChangeForegroundNotification}
                className="inline-flex items-center gap-x-20 p-1 rounded-md border"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="show" id="r1" />
                    <Label className="text-xs text-primary40" htmlFor="r1">
                        Show
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hide" id="r2" />
                    <Label className="text-xs text-primary40" htmlFor="r2">
                        Hide
                    </Label>
                </div>
            </RadioGroup>
        </CollapseableWithArrow>
    );
}
