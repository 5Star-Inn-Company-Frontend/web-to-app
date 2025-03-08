import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateFrontScaling } from "@/redux/app/interfaceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";

export default function FrontScalling() {
    const dispatch = useAppDispatch();
    const frontScaling = useAppSelector((state: RootState) => state.apps.interface.front_scaling);

    const initialFrontScaling = useMemo(() => (frontScaling ? "on" : "off"), [frontScaling]);
    const [enableFrontScaling, setEnableFrontScaling] = useState(initialFrontScaling);

    useEffect(() => {
        setEnableFrontScaling(initialFrontScaling);
    }, [initialFrontScaling]);

    const handleChangeFrontScaling = (newValue: string) => {
        setEnableFrontScaling(newValue);

        const frontScalingIsEnabled = newValue === "on";
        dispatch(updateFrontScaling(frontScalingIsEnabled));
    };

    return (
        <div className="p-4 pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Front Scaling"
                subTitle="Disable Android system front scaling or set a specific scale irrespective of device and device settings. e.g. 90% for smaller text than default."
            >
                <div className="grid grid-cols-2 px-8">
                    <OsConfigCard
                        os="IOS"
                        value={enableFrontScaling}
                        onValueChange={handleChangeFrontScaling}
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
