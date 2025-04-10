import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { OsConfigCard } from "@/components/global/os_config_card";
import { updatePitchToZoomAndroid, updatePitchToZoomIos } from "@/redux/app/interfaceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function PitchToZoom() {
    const dispatch = useAppDispatch();
    const pitchToZoom = useAppSelector((state: RootState) => state.apps.interface.pinchToZoom);

    const pitchToZoomIos = pitchToZoom.ios ? "on" : "off";
    const pitchToZoomAndroid = pitchToZoom.android ? "on" : "off";

    const handleChangePitchToZoomIos = (value: string) => {
        const isEnabledPitchToZoomIos = value === "on";
        dispatch(updatePitchToZoomIos(isEnabledPitchToZoomIos));
    };
    const handleChangePitchToZoomAndroid = (value: string) => {
        const isEnabledPitchToZoomAndroid = value === "on";
        dispatch(updatePitchToZoomAndroid(isEnabledPitchToZoomAndroid));
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
                        value={pitchToZoomIos}
                        onValueChange={handleChangePitchToZoomIos}
                        radios={[
                            { title: "Off", label: "off" },
                            { title: "On", label: "on" },
                        ]}
                    />
                    <OsConfigCard
                        os="Android"
                        value={pitchToZoomAndroid}
                        onValueChange={handleChangePitchToZoomAndroid}
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
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
