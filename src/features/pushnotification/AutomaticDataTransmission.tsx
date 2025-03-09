import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateAutoDataTransmission } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

type TInitialValue = "automatic" | "manual";

export default function AutomaticDataTransmission() {
    const dispatch = useAppDispatch();
    const autoDataTransmission = useAppSelector(
        (state: RootState) => state.apps.notification.automatic_data_transmission as TInitialValue
    );

    const initialValue: TInitialValue = autoDataTransmission || "automatic";

    const [enableAutoDataTrans, setEnableAutoTrans] = useState<TInitialValue>(initialValue);

    useEffect(() => {
        setEnableAutoTrans(initialValue);
    }, [initialValue]);

    const handleChangeAutoDataTrans = (value: string) => {
        const newAutoDataTransmission = value as TInitialValue;
        setEnableAutoTrans(newAutoDataTransmission);
        dispatch(updateAutoDataTransmission(newAutoDataTransmission));
    };

    return (
        <CollapseableWithArrow title="Automatic Data Transmission">
            <p className="text-sm text-primary60 mb-4">
                By default, your app will automatically send device data to OneSignal prior to
                requesting push notification consent. This includes obtaining a oneSignalUserId
                which can be used to associate the device and user. To facilitate GDPR compliance,
                you may set this to manual which will defer sending device data until you obtain
                consent from the user. You must then use the JavaScript Bridge to confirm consent
                has been granted and begin transmitting data.
            </p>
            <RadioGroup
                value={enableAutoDataTrans}
                onValueChange={handleChangeAutoDataTrans}
                className="inline-flex items-center gap-x-20 p-1 rounded-md border"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="automatic" id="r1" />
                    <Label className="text-xs text-primary40" htmlFor="r1">
                        Automatic
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="manual" id="r2" />
                    <Label className="text-xs text-primary40" htmlFor="r2">
                        Manual
                    </Label>
                </div>
            </RadioGroup>
        </CollapseableWithArrow>
    );
}
