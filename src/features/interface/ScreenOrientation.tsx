import { ScreenOrientationConfigCard } from "@/features/interface/screenorientationconfig";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { updateScreenOrientation } from "@/redux/app/interfaceSlice";

export default function ScreenOrientation() {
    const dispatch = useAppDispatch();
    const screenorientation = useSelector(
        (state: RootState) => state.apps.interface.screenOrientation
    );

    const handleIPhoneChange = (value: string) => {
        dispatch(updateScreenOrientation({ ...screenorientation, iphone: value }));
    };
    const handleIPadChange = (value: string) => {
        dispatch(updateScreenOrientation({ ...screenorientation, ipad: value }));
    };
    const handlePhoneChange = (value: string) => {
        dispatch(updateScreenOrientation({ ...screenorientation, iphone: value }));
    };
    const handleTabletChange = (value: string) => {
        dispatch(updateScreenOrientation({ ...screenorientation, androidTablet: value }));
    };

    return (
        <div className="pb-5 pt-2 xl:p-4 xl:pb-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Screen Orientation"
                subTitle="Control whether the orientation of your app changes automatically as the device is rotated or remains fixed in portrait or landscape mode. Note that Fixed Portrait for iPad will automatically disable multi-tasking."
            >
                <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-8">
                    <ScreenOrientationConfigCard
                        value={screenorientation.iphone}
                        onValueChange={handleIPhoneChange}
                        valueTab={screenorientation.ipad}
                        onValueChangeTab={handleIPadChange}
                        os="IOS"
                    />
                    <ScreenOrientationConfigCard
                        value={screenorientation.androidPhone}
                        valueTab={screenorientation.androidTablet}
                        onValueChange={handlePhoneChange}
                        onValueChangeTab={handleTabletChange}
                        os="Android"
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
