import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateInterface } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function Accessibility() {
    const dispatch = useAppDispatch();
    const accessibility = useSelector((state: RootState) => state.app.interface.accessibility);

    const initialState = useMemo(() => (accessibility ? "on" : "off"), [accessibility]);
    const [enableAccessibility, setEnableAccessibility] = useState(initialState);

    const handleChangeEnableAccessibility = (newValue: string) => {
        setEnableAccessibility(newValue);
        const accessibilityEnabled = newValue === "on" ? true : false;

        dispatch(updateInterface({ accessibility: accessibilityEnabled }));
    };

    return (
        <div className="p-4 pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Accessibility & Dynamic Type"
                subTitle="When enabled the text on pages displayed within your iOS app will adjust in size according to your device's settings using the CSS property -webkit-text-size-adjust"
            >
                <div className="grid grid-cols-2 px-8">
                    <OsConfigCard
                        os="IOS"
                        value={enableAccessibility}
                        onValueChange={handleChangeEnableAccessibility}
                        radios={[
                            { title: "Off", label: "off" },
                            { title: "On", label: "on" },
                        ]}
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
