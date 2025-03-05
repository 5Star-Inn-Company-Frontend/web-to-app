import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { Label } from "@/components/ui/label";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { updateNavigation } from "@/redux/app/appSlice";

type TInitialValue = "enable" | "disable";

export default function ForwardButtonConfig() {
    const dispatch = useAppDispatch();
    const fwdButtonConfig = useAppSelector((state: RootState) => state.app.navigation.contextual_nav_toolbar);

    // const initialValue = fwdButtonConfig.forward_button_configuration ? "enable" : "disable";
    const initialValue = useMemo<TInitialValue>(() => {
        return fwdButtonConfig.forward_button_configuration ? "enable" : "disable";
    }, [fwdButtonConfig.forward_button_configuration]);

    const [forwardButtonConfig, setForwardButtonConfig] = useState<TInitialValue>(initialValue);

    useEffect(() => {
        setForwardButtonConfig(initialValue);
    }, [initialValue]);

    const handleChangeForwardBtnConfig = useCallback(
        (value: TInitialValue) => {
            setForwardButtonConfig(value);
            const fwdButtonConfigIsEnabled = value === "enable";
            // new value
            const newContextualValue = { ...fwdButtonConfig, forward_button_configuration: fwdButtonConfigIsEnabled };
            // update redux store
            dispatch(updateNavigation({ contextual_nav_toolbar: newContextualValue }));
        },
        [dispatch, fwdButtonConfig]
    );

    return (
        <TopNavigationCollapsable title="Forward Button Configuration">
            <RadioGroup
                value={forwardButtonConfig}
                onValueChange={handleChangeForwardBtnConfig}
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
        </TopNavigationCollapsable>
    );
}
