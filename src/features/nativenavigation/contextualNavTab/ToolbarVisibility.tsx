import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMemo, useState } from "react";
import { updateContextualToolBarVisibility } from "@/redux/app/NavigationSlice";

type TinitialValue = "all page" | "specific pages";

export default function ToolbarVisibility() {
    const dispatch = useAppDispatch();
    const toolbar = useAppSelector(
        (state: RootState) => state.apps.navigation.contextual_nav_toolbar
    );

    const initialValue = useMemo(
        () => (toolbar.toolbar_visibility_by_pages || "all pages") as TinitialValue,
        [toolbar.toolbar_visibility_by_pages]
    );

    const [enableToolBar, setEnableToolBar] = useState<TinitialValue>(initialValue);

    const handleChangeToolBarVisibility = (value: TinitialValue) => {
        setEnableToolBar(value);
        dispatch(updateContextualToolBarVisibility(value));
    };

    return (
        <TopNavigationCollapsable title="Toolbar visibility by Pages">
            <RadioGroup
                value={enableToolBar}
                onValueChange={handleChangeToolBarVisibility}
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
