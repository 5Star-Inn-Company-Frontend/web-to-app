import { OsConfigCard } from "@/components/global/os_config_card";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { updateTopNavEnableAndroid, updateTopNavEnableIos } from "@/redux/app/NavigationSlice";

export default function DisplayMode() {
    const dispatch = useAppDispatch();
    const displayModeStore = useAppSelector(
        (state: RootState) => state.apps.navigation.topNavigationBar.enable
    );

    const displayModeIos = displayModeStore.ios ? "always" : "auto";
    const displayModeAndroid = displayModeStore.android ? "always" : "auto";

    const handleChangeDisplayMode = ({ type, value }: { type: string; value: string }) => {
        if (type === "ios") {
            const isIosEnabled = value === "always";
            dispatch(updateTopNavEnableIos({ active: isIosEnabled }));
        }

        if (type === "android") {
            const isAndroidEnabled = value === "always";
            dispatch(updateTopNavEnableAndroid({ active: isAndroidEnabled }));
        }
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
                        value={displayModeIos}
                        onValueChange={(value: string) =>
                            handleChangeDisplayMode({ type: "ios", value: value })
                        }
                        radios={[
                            { title: "Auto", label: "auto" },
                            { title: "Always", label: "always" },
                        ]}
                    />
                    <OsConfigCard
                        os="Android"
                        value={displayModeAndroid}
                        onValueChange={(value: string) =>
                            handleChangeDisplayMode({ type: "android", value: value })
                        }
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
