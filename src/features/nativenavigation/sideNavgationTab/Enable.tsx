import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { updateSideNavActive } from "@/redux/app/NavigationSlice";

type TinitialValue = "enable" | "disable";

export default function Enable() {
    const dispatch = useAppDispatch();
    const sideNavEnabled = useAppSelector(
        (state: RootState) => state.apps.navigation.sidebarNavigationBar.active
    );

    const sideNavActive = sideNavEnabled ? "enable" : "disable";

    const handleChangeEnableSideNav = (value: TinitialValue) => {
        const isEnableSideNav = value === "enable";
        dispatch(updateSideNavActive(isEnableSideNav));
    };

    return (
        <TopNavigationCollapsable title="Enable">
            <p className="text-sm text-primary60 mb-4">
                A Sidebar Navigation Menu is a standard navigation feature that is highly
                configurable. Users access the navigation menu through a "hamburger" toggle button
                if a Top Nav Bar is enabled, or by sliding from the left side of the screen. The
                menu items in the sidebar nav menu can be configured with an optional icon and in
                collapsible groupings. The sidebar menu items can be configured within the app
                configuration as well as set dynamically via the JavaScript Bridge
            </p>
            <div>
                <RadioGroup
                    value={sideNavActive}
                    onValueChange={handleChangeEnableSideNav}
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
            </div>
        </TopNavigationCollapsable>
    );
}
