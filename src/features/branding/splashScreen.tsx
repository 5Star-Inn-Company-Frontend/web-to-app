import { SplashScreenCard } from "@/components/customui/app/branding/splashscreencard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { updateSplashScreenAndroid, updateSplashScreenIOS } from "@/redux/app/brandSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
// import { useEffect, useState } from "react";

export default function SplashScreen() {
    const dispatch = useAppDispatch();
    const appIcon = useAppSelector((state: RootState) => state.apps.branding.splashScreen);

    const ios = appIcon.ios;
    const android = appIcon.android;

    const handleChangeIOSBackgroundDark = (color: string) => {
        dispatch(updateSplashScreenIOS({ ...ios, backgroundColorDark: color }));
    };
    const handleChangeIOSBackground = (color: string) => {
        dispatch(updateSplashScreenIOS({ ...ios, backgroundColor: color }));
    };
    const handleChangeAndriodBackground = (color: string) => {
        dispatch(updateSplashScreenAndroid({ ...android, backgroundColor: color }));
    };
    const handleChangeAndriodBackgroundDark = (color: string) => {
        dispatch(updateSplashScreenAndroid({ ...android, backgroundColorDark: color }));
    };
    return (
        <div className="py-6 xl:px-6 xl:py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Splash Screen"
                subTitle="Configure the splash screen that displays while your app initially launches. Splash screen appearance varies between iOS and Android to meet design guidelines for each platform. The splash screen will display until your webpage finishes loading (when the DOMContentLoaded event fires) so that the transition between splash screen and your app is seamless."
            >
                <div className="flex flex-col gap-4 mt-6 xl:px-2">
                    <SplashScreenCard
                        os="IOS"
                        img={ios.launchImages || "/giftcard2.png"}
                        imgDark={ios.launchImagesDark || "/giftcard2.png"}
                        bgColor={ios.backgroundColor}
                        bgColorDark={ios.backgroundColorDark}
                        setBackgroundDark={(color: string) => handleChangeIOSBackgroundDark(color)}
                        setBackground={(color: string) => handleChangeIOSBackground(color)}
                    />
                    <SplashScreenCard
                        os="Android"
                        img={android.launchImages || "/giftcard2.png"}
                        imgDark={android.launchImagesDark || "/giftcard2.png"}
                        bgColor={android.backgroundColor}
                        bgColorDark={android.backgroundColorDark}
                        setBackgroundDark={(color: string) =>
                            handleChangeAndriodBackgroundDark(color)
                        }
                        setBackground={(color: string) => handleChangeAndriodBackground(color)}
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
