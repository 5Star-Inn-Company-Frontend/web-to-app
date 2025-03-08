import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { updateBottomBarDefaultMode } from "@/redux/app/NavigationSlice";

type TinitialValue = "hidden" | "active";

export default function DefaultMode() {
    const dispatch = useAppDispatch();
    const bottomTab = useAppSelector((state: RootState) => state.apps.navigation.bottom_tab_bar);

    const initialValue = bottomTab.default_mode || "active";

    const [enableDefaultMode, setEnableDefaultMode] = useState<TinitialValue>(initialValue);

    useEffect(() => {
        setEnableDefaultMode(initialValue);
    }, [initialValue]);

    const handleChangeDefaultMode = (value: TinitialValue) => {
        setEnableDefaultMode(value);

        dispatch(updateBottomBarDefaultMode(value));
    };

    return (
        <TopNavigationCollapsable title="Default Mode">
            <p className="text-sm text-primary60 mb-4">
                A Bottom Tab Bar menu is the most common native navigation menu component. You can
                configure your app with multiple tab bar menus to show on different pages and define
                optional icons and labels for each menu. You can also set and control the tab menu
                at runtime from your website using the JavaScript Bridge.
            </p>
            <div>
                <RadioGroup
                    value={enableDefaultMode}
                    onValueChange={handleChangeDefaultMode}
                    className="inline-flex items-center gap-x-20 p-1 rounded-md border"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hidden" id="r1" />
                        <Label className="text-xs text-primary40" htmlFor="r1">
                            Hidden
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="active" id="r2" />
                        <Label className="text-xs text-primary40" htmlFor="r2">
                            Active
                        </Label>
                    </div>
                </RadioGroup>
            </div>
        </TopNavigationCollapsable>
    );
}
