import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { StatusbarCard } from "@/features/branding/statusbarcard";
import { updateStatusBarAndroid, updateStatusBarIOS } from "@/redux/app/brandSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function StatusBar() {
    const dispatch = useAppDispatch();
    const statusBar = useAppSelector((state: RootState) => state.apps.branding.statusBar);

    const iosStatus = statusBar.ios;
    const androidStatus = statusBar.android;

    const handleIOSStyleChange = (value: string) => {
        dispatch(updateStatusBarIOS({ ...iosStatus, style: value }));
    };
    const handleAndroidStyleChange = (value: string) => {
        dispatch(updateStatusBarAndroid({ ...androidStatus, style: value }));
    };

    const handleChangeIOSBlur = (checked: boolean) => {
        dispatch(updateStatusBarIOS({ ...iosStatus, blur: checked }));
    };

    const handleChangeIOSOverlay = (checked: boolean) => {
        dispatch(updateStatusBarIOS({ ...iosStatus, overlay: checked }));
    };
    const handleChangeAndroidBlur = (checked: boolean) => {
        dispatch(updateStatusBarAndroid({ ...androidStatus, blur: checked }));
    };

    const handleChangeAndroidOverlay = (checked: boolean) => {
        dispatch(updateStatusBarAndroid({ ...androidStatus, overlay: checked }));
    };

    const handleChangeIosBgLight = (color: string) => {
        dispatch(updateStatusBarIOS({ ...iosStatus, backgroundColor: color }));
    };
    const handleChangeIosBgDark = (color: string) => {
        dispatch(updateStatusBarIOS({ ...iosStatus, backgroundColorDark: color }));
    };
    const handleChangeAndroidBgLight = (color: string) => {
        dispatch(updateStatusBarAndroid({ ...androidStatus, backgroundColor: color }));
    };
    const handleChangeAndroidBgDark = (color: string) => {
        dispatch(updateStatusBarAndroid({ ...androidStatus, backgroundColorDark: color }));
    };

    return (
        <div className="pb-4 xl:p-4 bg-white mb-16 ">
            <CollapsibleComponent
                title="Status Bar"
                subTitle="Set default styling options and Light/Dark mode for the device status bar while your app is open. When the status bar is in Light mode it will display with black text, in Dark mode white text, in Auto mode it will follow the device Light/Dark mode setting. You may also customize and dynamically set the status bar visibility and style during runtime from your website using the Median Javascript Bridge."
            >
                <div className="flex flex-col gap-4 px-8">
                    <StatusbarCard
                        os="IOS"
                        style={iosStatus.style}
                        overlay={iosStatus.overlay}
                        blur={iosStatus.blur}
                        onStyleChange={(value: string) => handleIOSStyleChange(value)}
                        onChangeBlur={handleChangeIOSBlur}
                        onChangeOverlay={handleChangeIOSOverlay}
                        bgLight={iosStatus.backgroundColor}
                        bgDark={iosStatus.backgroundColorDark}
                        setBgDark={handleChangeIosBgDark}
                        setBgLight={handleChangeIosBgLight}
                    />
                    <StatusbarCard
                        os="Android"
                        style={androidStatus.style}
                        overlay={androidStatus.overlay}
                        blur={androidStatus.blur}
                        onStyleChange={(value: string) => handleAndroidStyleChange(value)}
                        onChangeBlur={handleChangeAndroidBlur}
                        onChangeOverlay={handleChangeAndroidOverlay}
                        bgLight={androidStatus.backgroundColor}
                        bgDark={androidStatus.backgroundColorDark}
                        setBgDark={handleChangeAndroidBgDark}
                        setBgLight={handleChangeAndroidBgLight}
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
