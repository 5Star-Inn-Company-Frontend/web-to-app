import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateAccessibility } from "@/redux/app/interfaceSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function Accessibility() {
    const dispatch = useAppDispatch();
    const accessibility = useSelector((state: RootState) => state.apps.interface.accessibility);

    const initialState = useMemo(() => (accessibility ? "on" : "off"), [accessibility]);
    const [enableAccessibility, setEnableAccessibility] = useState(initialState);

    useEffect(() => {
        setEnableAccessibility(initialState);
    }, [initialState]);

    const handleChangeEnableAccessibility = (newValue: string) => {
        setEnableAccessibility(newValue);
        const accessibilityEnabled = newValue === "on" ? true : false;

        dispatch(updateAccessibility(accessibilityEnabled));
    };

    return (
        <div className="pb-5 pt-2 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Accessibility & Dynamic Type"
                subTitle="When enabled the text on pages displayed within your iOS app will adjust in size according to your device's settings using the CSS property -webkit-text-size-adjust"
            >
                <div className="grid xl:grid-cols-2 px-8">
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
