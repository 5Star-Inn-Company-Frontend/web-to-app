import { ScreenOrientationConfigCard } from "@/features/interface/screenorientationconfig";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { updateScreenOrientation } from "@/redux/app/interfaceSlice";

export default function ScreenOrientation() {
    const dispatch = useAppDispatch();
    const screenorientation = useSelector(
        (state: RootState) => state.apps.interface.screen_orientation
    );

    const initialValue = useMemo(() => screenorientation || "auto rotate", [screenorientation]);
    const [enableScreenOrientation, setEnableScreenOrientation] = useState(initialValue);

    useEffect(() => {
        setEnableScreenOrientation(initialValue);
    }, [initialValue]);

    const handleChangeScreenOrientation = useCallback(
        (newvalue: string) => {
            setEnableScreenOrientation(newvalue);
            dispatch(updateScreenOrientation(newvalue));
        },
        [dispatch]
    );

    return (
        <div className="pb-5 pt-2 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Screen Orientation"
                subTitle="Control whether the orientation of your app changes automatically as the device is rotated or remains fixed in portrait or landscape mode. Note that Fixed Portrait for iPad will automatically disable multi-tasking."
            >
                <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    <ScreenOrientationConfigCard
                        value={enableScreenOrientation}
                        onValueChange={handleChangeScreenOrientation}
                        os="IOS"
                    />
                    <ScreenOrientationConfigCard
                        value={enableScreenOrientation}
                        onValueChange={handleChangeScreenOrientation}
                        os="Android"
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
