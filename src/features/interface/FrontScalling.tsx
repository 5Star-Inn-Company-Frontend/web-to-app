import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateFrontScaling } from "@/redux/app/interfaceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function FrontScalling() {
    const dispatch = useAppDispatch();
    const frontScaling = useAppSelector((state: RootState) => state.apps.interface.front_scaling);

    const frontScalingValue = frontScaling ? "on" : "off";

    const handleChangeFrontScaling = (newValue: string) => {
        const frontScalingIsEnabled = newValue === "on";
        dispatch(updateFrontScaling(frontScalingIsEnabled));
    };

    return (
        <div className="pb-5 pt-2 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Front Scaling"
                subTitle="Disable Android system front scaling or set a specific scale irrespective of device and device settings. e.g. 90% for smaller text than default."
            >
                <div className="grid xl:grid-cols-2 px-8">
                    <OsConfigCard
                        os="IOS"
                        value={frontScalingValue}
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
