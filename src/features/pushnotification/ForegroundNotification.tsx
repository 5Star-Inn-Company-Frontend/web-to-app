import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateForegroundNotification } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

type TInitialValue = "show" | "hide";

export default function ForegroundNotification() {
    const dispatch = useAppDispatch();
    const foregroundNotification = useAppSelector(
        (state: RootState) => state.apps.notification.foreground_notification
    ) as TInitialValue;

    const initialValue = foregroundNotification || "show";

    const [enableForegroundNotification, setEnableForegroundNotification] =
        useState<TInitialValue>(initialValue);

    useEffect(() => {
        setEnableForegroundNotification(initialValue);
    }, [initialValue]);

    const handleChangeForegroundNotification = (value: string) => {
        const newForegroundValue = value as TInitialValue;

        setEnableForegroundNotification(newForegroundValue);
        dispatch(updateForegroundNotification(newForegroundValue));
    };

    return (
        <CollapseableWithArrow title="Foreground Notification">
            <RadioGroup
                value={enableForegroundNotification}
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
