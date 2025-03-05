import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updateInterface } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function PitchToZoom() {
    const dispatch = useAppDispatch();
    const pitchToZoom = useSelector((state: RootState) => state.app.interface.pitch_to_zoom);

    const initialValue = useMemo(() => (pitchToZoom ? "on" : "off"), [pitchToZoom]);
    const [enablePitchToZoom, setEnablePitchToZoom] = useState(initialValue);

    const handleChangePitchToZoom = (newvalue: string) => {
        setEnablePitchToZoom(newvalue);
        const pitchToZoomIsEnabled = newvalue === "on";
        dispatch(updateInterface({ pitch_to_zoom: pitchToZoomIsEnabled }));
    };

    return (
        <div className="p-4 pb-10 bg-white border-b border-primary20">
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
