import { OsConfigCard } from "@/components/global/os_config_card";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { updateDisplayMode } from "@/redux/app/NavigationSlice";

type TDisplayMode = "auto" | "always";

export default function DisplayMode() {
    const dispatch = useAppDispatch();
    const displayModeStore = useAppSelector(
        (state: RootState) => state.apps.navigation.top_nav_bar.display_mode
    );

    const initialValue = displayModeStore || "auto";

    const [displayMode, setDisplayMode] = useState<TDisplayMode | string>(initialValue);

    useEffect(() => {
        setDisplayMode(initialValue);
    }, [initialValue]);

    const handleChangeDisplayMode = (value: string) => {
        const newValue = value as TDisplayMode;

        setDisplayMode(value);

        dispatch(updateDisplayMode(newValue));
    };

    return (
        <TopNavigationCollapsable title="Display Mode">
            <p className="text-sm text-primary60">
                A native Top Navigation Bar can be used to helo your users navigate throughout your
                app. You can display dynamic titles depending on the page being shown. You may also
                add a search bar form, refresh functionality, and custom buttons. When a Sidebar
                Navigation Menu is also enabled, a "hamburger" toggle button is shown in the top nav
                bar to easily open the menu.
            </p>
            <div>
                <div className="grid xl:grid-cols-2 gap-y-4 xl:gap-y-0 gap-x-8 mt-6">
                    <OsConfigCard
                        os="IOS"
                        value={displayMode}
                        onValueChange={handleChangeDisplayMode}
                        radios={[
                            { title: "Auto", label: "auto" },
                            { title: "Always", label: "always" },
                        ]}
                    />
                    <OsConfigCard
                        os="Android"
                        value={displayMode}
                        onValueChange={handleChangeDisplayMode}
                        radios={[
                            { title: "Auto", label: "auto" },
                            { title: "Always", label: "always" },
                        ]}
                    />
                </div>
            </div>
        </TopNavigationCollapsable>
    );
}
