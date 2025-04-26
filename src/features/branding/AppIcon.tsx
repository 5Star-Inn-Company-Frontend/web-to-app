import { fileUpload } from "@/api/app";
import { AppIconCard } from "@/components/customui/app/branding/appIconCard";
import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { updateAppIconAndroid, updateAppIconIos } from "@/redux/app/brandSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";

export default function AppIcon() {
    const dispatch = useAppDispatch();
    const appIcon = useAppSelector((state: RootState) => state.apps.branding.icons);

    const iosIcon = appIcon.ios || "/apple.png";
    const androidIcon = appIcon.android || "/android.png";

    const handleChangeIos = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const iosImgUrl = await toast.promise(fileUpload(file), {
                loading: "Uploading...",
                success: "Upload successful!",
                error: "Error uploading file",
            });

            dispatch(updateAppIconIos(iosImgUrl.url));
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "An unknown error occurred";
            toast.error("Error uploading file: " + errorMessage);
        }
    };
    const handleChangeAndroid = async (e: ChangeEvent<HTMLInputElement>) => {
        const androidFile = e.target.files?.[0];
        if (!androidFile) return;

        try {
            const androidImgUrl = await toast.promise(fileUpload(androidFile), {
                loading: "Uploading...",
                success: "Upload successful!",
                error: "Error uploading file",
            });
            dispatch(updateAppIconAndroid(androidImgUrl.url));
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "An unknown error occurred";
            toast.error("Error uploading file: " + errorMessage);
        }
    };

    return (
        <div className="py-6 xl:px-6 xl:py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="App Icon"
                subTitle="Your app icon is your app’s identity and is used on the device home screen and in other locations such as settings. Upload a PNG or JPG square image to use as your app's launch icon. Recommended resolution is 1024x1024 pixels."
            >
                <div className="gap-4 grid xl:mt-8 md:grid-cols-2 grd-cols-1 px-8 ">
                    <AppIconCard
                        os="IOS"
                        img={iosIcon}
                        onChange={handleChangeIos}
                        inputId="ios-icon-img"
                    />
                    <AppIconCard
                        os="Android"
                        img={androidIcon}
                        onChange={handleChangeAndroid}
                        inputId="android-icon-img"
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
