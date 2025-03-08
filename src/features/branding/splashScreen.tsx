import { SplashScreenCard } from "@/components/customui/app/branding/splashscreencard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function SplashScreen() {
    const appIcon =
        useAppSelector((state: RootState) => state.apps.branding.app_icon) || "/giftcard2.png";

    return (
        <div className="px-6 py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Splash Screen"
                subTitle="Configure the splash screen that displays while your app initially launches. Splash screen appearance varies between iOS and Android to meet design guidelines for each platform. The splash screen will display until your webpage finishes loading (when the DOMContentLoaded event fires) so that the transition between splash screen and your app is seamless."
            >
                <div className="flex flex-col gap-4 mt-6 px-8">
                    <SplashScreenCard os="IOS" img={appIcon} />
                    {/* <SplashScreenCard os="Android" img={data?.branding?.app_icon || "/giftcard2.png"} /> */}
                </div>
            </CollapsibleComponent>
        </div>
    );
}
