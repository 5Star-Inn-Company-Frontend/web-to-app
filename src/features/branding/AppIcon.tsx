import { AppIconCard } from "@/components/customui/app/branding/appIconCard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export default function AppIcon() {
    const appIcon =
        useAppSelector((state: RootState) => state.apps.branding.app_icon) || "/giftcard2.png";

    return (
        <div className="py-6 xl:px-6 xl:py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="App Icon"
                subTitle="Your app icon is your app’s identity and is used on the device home screen and in other locations such as settings. Upload a PNG or JPG square image to use as your app's launch icon. Recommended resolution is 1024x1024 pixels."
            >
                <div className="gap-4 grid xl:mt-8 md:grid-cols-2 grd-cols-1 px-8 ">
                    <AppIconCard os="IOS" img={appIcon} />
                    <AppIconCard os="Android" img={appIcon} />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
