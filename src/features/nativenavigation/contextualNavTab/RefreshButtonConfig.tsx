import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { Label } from "@/components/ui/label";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { updateNavigation } from "@/redux/app/appSlice";

type RefreshButtonValue = "enable" | "disable";

export default function RefreshButtonConfig() {
    const dispatch = useAppDispatch();
    const refreshBtnConfig = useAppSelector((state: RootState) => state.app.navigation.contextual_nav_toolbar);

    // Memoize initial value to avoid recalculating on every render
    const initialValue = useMemo<RefreshButtonValue>(
        () => (refreshBtnConfig.refresh_button_configuration ? "enable" : "disable"),
        [refreshBtnConfig.refresh_button_configuration]
    );

    const [enableRefreshBtnConfig, setEnableRefreshBtnConfig] = useState(initialValue);

    // Sync local state with Redux when initialValue changes
    useEffect(() => {
        setEnableRefreshBtnConfig(initialValue);
    }, [initialValue]);

    //
    const handleChangeRefreshBtnConfig = useCallback(
        (value: RefreshButtonValue) => {
            setEnableRefreshBtnConfig(value);

            const refreshBtnConfigIsEnabled = value === "enable";

            // new value
            const newContextualValue = { ...refreshBtnConfig, forward_button_configuration: refreshBtnConfigIsEnabled };

            // update redux store
            dispatch(updateNavigation({ contextual_nav_toolbar: newContextualValue }));
        },
        [dispatch, refreshBtnConfig]
    );

    return (
        <TopNavigationCollapsable title="Refresh Button Configuration">
            <RadioGroup
                value={enableRefreshBtnConfig}
                onValueChange={handleChangeRefreshBtnConfig}
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
