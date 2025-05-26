import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Text } from "@/components/global/text";
import { AppIconCard } from "./appIconCard";
import { SplashScreenCard } from "./splashscreencard";
import { StatusbarCard } from "./statusbarcard";
import { ThemeColorsCard } from "./themecolorsCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
    updateStatusBarAndroid,
    updateStatusBarIOS,
    updateThemeColorIOS,
} from "@/redux/app/brandSlice";

export const BrandingSection = () => {
    const dispatch = useAppDispatch();
    const themeColors = useAppSelector((state) => state.apps.branding.themeColors);
    const statusBar = useAppSelector((state) => state.apps.branding.statusBar);

    // color theme state
    const iosTheme = themeColors.ios;
    const androidTheme = themeColors.android;

    // statusBar State
    const statusBarIOS = statusBar.ios;
    const statusBarAndroid = statusBar.android;

    const handleChangeIosTheme = (value: string, mode: string) => {
        if (mode === "dark") {
            dispatch(updateThemeColorIOS({ ...iosTheme, primaryColorDark: value }));
        } else {
            dispatch(updateThemeColorIOS({ ...iosTheme, primaryColor: value }));
        }
    };

    const handleChangeAndroidTheme = (value: string, mode: string) => {
        if (mode === "dark") {
            dispatch(updateThemeColorIOS({ ...androidTheme, primaryColorDark: value }));
        } else {
            dispatch(updateThemeColorIOS({ ...androidTheme, primaryColor: value }));
        }
    };

    return (
        <>
            <div className="px-12 py-10 border-b border-primary20 bg-white w-full rounded">
                <Text style="text-4xl font-medium mb-4" value="App Branding" />
                <Text
                    style="text-sm text-primary40"
                    value="The first step in configuring your app is add an app icon and splash screen, and to select theme colors
                    aligned with your organization"
                />
            </div>
            <div className="px-6 py-10 bg-white border-b border-primary20">
                <CollapsibleComponent
                    title="App Icon"
                    subTitle="Your app icon is your app’s identity and is used on the device home screen and in other locations such as settings. Upload a PNG or JPG square image to use as your app's launch icon. Recommended resolution is 1024x1024 pixels."
                >
                    <div className="gap-4 grid mt-8 md:grid-cols-2 grd-cols-1 ">
                        <AppIconCard os="IOS" img="/giftcard2.png" />
                        <AppIconCard os="Android" img="/giftcard2.png" />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="px-6 py-10 bg-white">
                <CollapsibleComponent
                    title="Splash Screen"
                    subTitle="Configure the splash screen that displays while your app initially launches. Splash screen appearance varies between iOS and Android to meet design guidelines for each platform. The splash screen will display until your webpage finishes loading (when the DOMContentLoaded event fires) so that the transition between splash screen and your app is seamless."
                >
                    <div className="flex flex-col gap-4 mt-6">
                        <SplashScreenCard os="IOS" img="/giftcard.png" />
                        <SplashScreenCard os="Android" img="/giftcard.png" />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="px-6 bg-white">
                <CollapsibleComponent
                    title="Theme Colors"
                    subTitle="Set a Primary Color used for text fields and labels, also referred to as the Tint color for iOS and the Accent color for Android."
                >
                    <div className="flex flex-col gap-4">
                        <ThemeColorsCard
                            os="IOS"
                            lightTheme={iosTheme.primaryColor}
                            darkTheme={iosTheme.primaryColorDark}
                            setLightTheme={(value: string) => handleChangeIosTheme(value, "light")}
                            setDarkTheme={(value: string) => handleChangeIosTheme(value, "dark")}
                        />
                        <ThemeColorsCard
                            os="Android"
                            lightTheme={androidTheme.primaryColor}
                            darkTheme={androidTheme.primaryColorDark}
                            setLightTheme={(value: string) =>
                                handleChangeAndroidTheme(value, "light")
                            }
                            setDarkTheme={(value: string) =>
                                handleChangeAndroidTheme(value, "light")
                            }
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Status Bar"
                    subTitle="Set default styling options and Light/Dark mode for the device status bar while your app is open. When the status bar is in Light mode it will display with black text, in Dark mode white text, in Auto mode it will follow the device Light/Dark mode setting. You may also customize and dynamically set the status bar visibility and style during runtime from your website using the Median Javascript Bridge."
                >
                    <div className="flex flex-col gap-4">
                        <StatusbarCard
                            os="IOS"
                            style={statusBarIOS.style}
                            onStyleChange={(value) =>
                                dispatch(updateStatusBarIOS({ ...statusBarIOS, style: value }))
                            }
                            overlay={statusBarIOS.overlay}
                            blur={statusBarIOS.blur}
                            onChangeBlur={(checked) =>
                                dispatch(updateStatusBarIOS({ ...statusBarIOS, blur: checked }))
                            }
                            onChangeOverlay={(checked) =>
                                dispatch(updateStatusBarIOS({ ...statusBarIOS, overlay: checked }))
                            }
                            bgLight={statusBarIOS.backgroundColor}
                            bgDark={statusBarIOS.backgroundColorDark}
                            setBgLight={(color) =>
                                dispatch(
                                    updateStatusBarIOS({ ...statusBarIOS, backgroundColor: color })
                                )
                            }
                            setBgDark={(color) =>
                                dispatch(
                                    updateStatusBarIOS({
                                        ...statusBarIOS,
                                        backgroundColorDark: color,
                                    })
                                )
                            }
                        />
                        <StatusbarCard
                            os="Android"
                            style={statusBarAndroid.style}
                            onStyleChange={(value) =>
                                dispatch(
                                    updateStatusBarAndroid({ ...statusBarAndroid, style: value })
                                )
                            }
                            overlay={statusBarAndroid.overlay}
                            blur={statusBarAndroid.blur}
                            onChangeBlur={(checked) =>
                                dispatch(
                                    updateStatusBarAndroid({ ...statusBarAndroid, blur: checked })
                                )
                            }
                            onChangeOverlay={(checked) =>
                                dispatch(
                                    updateStatusBarAndroid({
                                        ...statusBarAndroid,
                                        overlay: checked,
                                    })
                                )
                            }
                            bgLight={statusBarAndroid.backgroundColor}
                            bgDark={statusBarAndroid.backgroundColorDark}
                            setBgLight={(color) =>
                                dispatch(
                                    updateStatusBarAndroid({
                                        ...statusBarAndroid,
                                        backgroundColor: color,
                                    })
                                )
                            }
                            setBgDark={(color) =>
                                dispatch(
                                    updateStatusBarAndroid({
                                        ...statusBarAndroid,
                                        backgroundColorDark: color,
                                    })
                                )
                            }
                        />
                    </div>
                </CollapsibleComponent>
            </div>
        </>
    );
};
