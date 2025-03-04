import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/global/text";
import { useCallback, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { IContextualNavToolbar } from "@/types/type";
import { updateNavigation } from "@/redux/app/appSlice";

type IBackBtnLabel = "no text" | "default text" | "custom text";
type IBackBtnPages = "all pages" | "specific pages";

export default function BackButtonConfig() {
    const dispatch = useAppDispatch();

    const backButtonConfig = useAppSelector((state: RootState) => state.app.navigation.contextual_nav_toolbar);

    /* ========== Memoize Initial Value from Redux ============= */

    const initialValue = useMemo(() => {
        return {
            label: (backButtonConfig.back_button_configuration.label ?? "no text") as IBackBtnLabel,
            pages_to_activate_button: (backButtonConfig.back_button_configuration.pages_to_activate_button ??
                "all pages") as IBackBtnPages,
        };
    }, [backButtonConfig?.back_button_configuration]);

    /* ============== State ============ */

    const [backBtnLabel, setBackBtnLabel] = useState<IBackBtnLabel>(initialValue.label);
    const [backBtnPages, setBackBtnPages] = useState<IBackBtnPages>(initialValue.pages_to_activate_button);

    /* ========= Handle Pages Change ============ */

    const handleChangeBackBtnPages = useCallback(
        (value: IBackBtnPages) => {
            setBackBtnPages(value);
            const newContextualValue: IContextualNavToolbar = {
                ...backButtonConfig,
                back_button_configuration: { ...backButtonConfig.back_button_configuration, label: value },
            };
            dispatch(updateNavigation({ contextual_nav_toolbar: newContextualValue }));
        },
        [dispatch, backButtonConfig]
    );

    /* =============== Handle Label Change ========== */

    const handleChangeBackBtnLabel = useCallback(
        (value: IBackBtnLabel) => {
            setBackBtnLabel(value);
            const newContextualValue: IContextualNavToolbar = {
                ...backButtonConfig,
                back_button_configuration: {
                    ...backButtonConfig.back_button_configuration,
                    pages_to_activate_button: value,
                },
            };
            dispatch(updateNavigation({ contextual_nav_toolbar: newContextualValue }));
        },
        [dispatch, backButtonConfig]
    );

    return (
        <TopNavigationCollapsable title="Back Button Configuration">
            <RadioGroup
                value={backBtnLabel}
                onValueChange={handleChangeBackBtnLabel}
                className="inline-flex items-center gap-x-20 p-1 px-2 rounded-md border"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no text" id="r1" />
                    <Label className="text-xs text-primary40" htmlFor="r1">
                        No Text
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default text" id="r2" />
                    <Label className="text-xs text-primary40" htmlFor="r2">
                        Default Text
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom text" id="r2" />
                    <Label className="text-xs text-primary40" htmlFor="r2">
                        Custom Text
                    </Label>
                </div>
            </RadioGroup>
            <Text style="my-3 font-medium" value="Pages to Activate Button" />
            <RadioGroup
                value={backBtnPages}
                onValueChange={handleChangeBackBtnPages}
                className="inline-flex items-center gap-x-20 p-1 rounded-md border"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all pages" id="r1" />
                    <Label className="text-xs text-primary40" htmlFor="r1">
                        All Pages
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="specific pages" id="r2" />
                    <Label className="text-xs text-primary40" htmlFor="r2">
                        Specific Pages
                    </Label>
                </div>
            </RadioGroup>
        </TopNavigationCollapsable>
    );
}
