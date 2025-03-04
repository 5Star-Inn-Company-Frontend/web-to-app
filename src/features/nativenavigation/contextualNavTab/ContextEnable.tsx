import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { FaApple } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useCallback, useMemo, useState } from "react";
import { IContextualNavToolbar } from "@/types/type";
import { updateNavigation } from "@/redux/app/appSlice";

type TinitialValue = "auto" | "always";

export default function ContextEnable() {
    const dispatch = useAppDispatch();
    const contextual = useAppSelector((state: RootState) => state.app.navigation.contextual_nav_toolbar);

    const initialValue = useMemo(() => (contextual.enable || "auto") as TinitialValue, [contextual.enable]);

    const [enableToolBar, setEnableToolBar] = useState<TinitialValue>(initialValue);

    const handleChangeEnable = useCallback(
        () => (value: TinitialValue) => {
            setEnableToolBar(value);
            const newContextual: IContextualNavToolbar = { ...contextual, enable: value };
            dispatch(updateNavigation({ contextual_nav_toolbar: newContextual }));
        },
        []
    );

    return (
        <TopNavigationCollapsable title="Enable">
            <p className="text-sm text-primary60 mb-4">
                Unlike Android devices iPhones and iPads do not have a built-in back button, which can make navigating
                your website from within your app challenging. This feature provides a native navigation toolbar that
                shows on the bottom of the device screen dependent on navigation history and page URL. By default, the
                toolbar will include a Back button but it can be customized to also show with Forward and Refresh
                buttons.
            </p>
            <div className="border border-primary40 rounded-lg">
                <div className="flex items-center gap-x-1 px-4 py-2 border-b border-primary40 ">
                    <FaApple />
                    <span className="text-sm">IOS</span>
                </div>
                <div className="px-4 py-3">
                    <RadioGroup
                        value={enableToolBar}
                        onValueChange={handleChangeEnable}
                        className="inline-flex items-center gap-x-20 p-1 rounded-md border"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="auto" id="r1" />
                            <Label className="text-xs text-primary40" htmlFor="r1">
                                Auto
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="always" id="r2" />
                            <Label className="text-xs text-primary40" htmlFor="r2">
                                Always
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </TopNavigationCollapsable>
    );
}
