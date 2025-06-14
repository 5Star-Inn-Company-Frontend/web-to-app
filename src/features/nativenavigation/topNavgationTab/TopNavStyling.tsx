import { TopNavigationCard } from "../TopNavigationCard";
import TopNavigationCollapsable from "../TopNavigationCollapsable";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { updateTopNavStylingAndroid, updateTopNavStylingIos } from "@/redux/app/NavigationSlice";
import { fileUpload } from "@/api/app";
import toast from "react-hot-toast";

export default function TopNavStyling() {
    const dispatch = useAppDispatch();
    const topNavStyling = useAppSelector(
        (state: RootState) => state.apps.navigation.topNavigationBar.styling
    );

    const iosStyling = topNavStyling.ios;
    const androidStyling = topNavStyling.android;

    const handleChangeDefaultDisplay = ({ type, value }: { type: string; value: string }) => {
        type === "ios"
            ? dispatch(updateTopNavStylingIos({ ...iosStyling, defaultDisplay: value }))
            : dispatch(updateTopNavStylingAndroid({ ...androidStyling, defaultDisplay: value }));
    };

    const handleChangeIos = async (file: File) => {
        if (!file) return;

        try {
            const iosImgUrl = await toast.promise(fileUpload(file), {
                loading: "Uploading...",
                success: "Upload successful!",
                error: "Error uploading file",
            });

            dispatch(updateTopNavStylingIos({ ...iosStyling, newImage: iosImgUrl.url }));
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "An unknown error occurred";
            toast.error("Error uploading file: " + errorMessage);
        }
    };
    const handleChangeAndroid = async (file: File) => {
        if (!file) return;

        try {
            const androidImgUrl = await toast.promise(fileUpload(file), {
                loading: "Uploading...",
                success: "Upload successful!",
                error: "Error uploading file",
            });

            dispatch(
                updateTopNavStylingAndroid({ ...androidStyling, newImageDark: androidImgUrl.url })
            );
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "An unknown error occurred";
            toast.error("Error uploading file: " + errorMessage);
        }
    };

    return (
        <TopNavigationCollapsable title="Styling">
            <p className="text-sm text-primary60 mb-6">
                Configure display settings for text in the top navigation bar and add an optional
                custom horizontal image. To show different content based on the page being shown in
                your app, configure Dynamic Titles. Note hat for iOS the color of any native UI
                elements such as the hamburger menu will follow the app-wide Theme colors set on the
                Branding tab.
            </p>
            <div className="grid gap-y-5">
                <TopNavigationCard
                    os="IOS"
                    img={topNavStyling.ios.newImage}
                    inputId="ios-styling"
                    onInputChange={handleChangeIos}
                    value={iosStyling.defaultDisplay}
                    onValueChange={(value: string) =>
                        handleChangeDefaultDisplay({ type: "ios", value })
                    }
                    radios={[
                        { title: "Text", label: "text" },
                        { title: "Image", label: "image" },
                    ]}
                />
                <TopNavigationCard
                    os="Android"
                    img={topNavStyling.ios.newImageDark}
                    inputId="android-styling"
                    onInputChange={handleChangeAndroid}
                    value={androidStyling.defaultDisplay}
                    onValueChange={(value: string) =>
                        handleChangeDefaultDisplay({ type: "android", value })
                    }
                    radios={[
                        { title: "Text", label: "text" },
                        { title: "Image", label: "image" },
                    ]}
                />
            </div>
        </TopNavigationCollapsable>
    );
}
