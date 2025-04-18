import { AppIconCard } from "@/components/customui/app/branding/appIconCard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export default function AppIcon() {
    const appIcon = useAppSelector((state: RootState) => state.apps.branding.icons);

    const [iosIcon, setIosIcon] = useState(appIcon.ios || "");
    const [iconAndroid, setIconAndriod] = useState(appIcon.android || "");

    useEffect(() => {
        setIconAndriod(appIcon.android || "/android.png");
        setIosIcon(appIcon.ios || "/apple.png");
    }, [appIcon.android, appIcon.ios]);

    return (
        <div className="py-6 xl:px-6 xl:py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="App Icon"
                subTitle="Your app icon is your app’s identity and is used on the device home screen and in other locations such as settings. Upload a PNG or JPG square image to use as your app's launch icon. Recommended resolution is 1024x1024 pixels."
            >
                <div className="gap-4 grid xl:mt-8 md:grid-cols-2 grd-cols-1 px-8 ">
                    <AppIconCard os="IOS" img={iosIcon} />
                    <AppIconCard os="Android" img={iconAndroid} />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
