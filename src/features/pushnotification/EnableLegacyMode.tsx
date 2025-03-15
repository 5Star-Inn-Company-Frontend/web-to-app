import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateLegacyMode } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useState } from "react";

type TInitialValue = "enable" | "disable";

export default function EnableLegacyMode() {
    const dispatch = useAppDispatch();
    const legacyMode = useAppSelector((state: RootState) => state.apps.notification.legacy_mode);

    const initialValue: TInitialValue = legacyMode ? "enable" : "disable";

    const [enableLegacyMode, setEnableLegacyMode] = useState(initialValue);

    const handleChangeLegacyMode = (value: string) => {
        const newValue = value as TInitialValue;
        setEnableLegacyMode(newValue);
        const isLegacyModeEnabled = newValue === "enable" ? true : false;

        dispatch(updateLegacyMode(isLegacyModeEnabled));
    };

    return (
        <CollapseableWithArrow title="Legacy Mode">
            <p className="text-sm text-primary60 mb-4">
                Your app will integrate with the latest OneSignal SDKs and user-centric data model
                by default. Legacy mode provides support for OneSignal’s v4 SDKs and their previous
                device-centric data model. To migrate your app from legacy mode to the latest SDKs
                disable this setting and refer to OneSignal’s User Model Migration Guide as linked
                in our documentation.
            </p>
            <RadioGroup
                value={enableLegacyMode}
                onValueChange={handleChangeLegacyMode}
                className="inline-flex items-center gap-x-20 p-1 rounded-md border"
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
