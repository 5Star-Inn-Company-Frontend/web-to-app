import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updatePitchToZoom } from "@/redux/app/interfaceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useMemo, useState } from "react";

export default function PitchToZoom() {
    const dispatch = useAppDispatch();
    const pitchToZoom = useAppSelector((state: RootState) => state.apps.interface.pitch_to_zoom);

    const initialValue = useMemo(() => (pitchToZoom ? "on" : "off"), [pitchToZoom]);
    const [enablePitchToZoom, setEnablePitchToZoom] = useState(initialValue);

    useEffect(() => {
        setEnablePitchToZoom(initialValue);
    }, [initialValue]);

    const handleChangePitchToZoom = (newvalue: string) => {
        setEnablePitchToZoom(newvalue);
        const pitchToZoomIsEnabled = newvalue === "on";
        dispatch(updatePitchToZoom(pitchToZoomIsEnabled));
    };

    return (
        <div className="pt-2 pb-5 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Pinch to zoom"
                subTitle="Add pinch-to-zoom functionality so that users can use two fingers to zoom in and out without your app. This feature is disabled by default as in some scenarios the behavior may not be required."
            >
                <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    <OsConfigCard
                        os="IOS"
                        value={enablePitchToZoom}
                        onValueChange={handleChangePitchToZoom}
                        radios={[
                            { title: "Off", label: "off" },
                            { title: "On", label: "on" },
                        ]}
                    />
                    {/* <OsConfigCard
                                os="Android"
                                radios={[
                                    {
                                        title: "Off",
                                        label: "off",
                                    },
                                    {
                                        title: "On",
                                        label: "on",
                                    },
                                ]}
                            /> */}
                </div>
            </CollapsibleComponent>
        </div>
    );
}
