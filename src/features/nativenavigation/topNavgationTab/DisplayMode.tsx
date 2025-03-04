import { OsConfigCard } from "@/components/global/os_config_card";
import TopNavigationCollapsable from "../TopNavigationCollapsable";

export default function DisplayMode() {
    return (
        <TopNavigationCollapsable title="Display Mode">
            <p className="text-sm text-primary60">
                A native Top Navigation Bar can be used to helo your users navigate throughout your app. You can display
                dynamic titles depending on the page being shown. You may also add a search bar form, refresh
                functionality, and custom buttons. When a Sidebar Navigation Menu is also enabled, a "hamburger" toggle
                button is shown in the top nav bar to easily open the menu.
            </p>
            <div>
                <div className="grid grid-cols-2 gap-x-8 mt-6">
                    <OsConfigCard
                        os="IOS"
                        radios={[
                            { title: "Auto", label: "Auto" },
                            { title: "Always", label: "Always" },
                        ]}
                    />
                    <OsConfigCard
                        os="IOS"
                        radios={[
                            { title: "Disable", label: "disable" },
                            { title: "Enable", label: "enable" },
                        ]}
                    />
                </div>
            </div>
        </TopNavigationCollapsable>
    );
}
