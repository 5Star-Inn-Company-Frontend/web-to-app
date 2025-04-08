import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { ThemeColorsCard } from "./themecolorsCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { updateThemeColorAndroid, updateThemeColorIOS } from "@/redux/app/brandSlice";

export default function ThemeColor() {
    const dispatch = useAppDispatch();
    const themeColor = useAppSelector((state: RootState) => state.apps.branding.themeColors);

    const iosTheme = themeColor.ios;
    const androidTheme = themeColor.android;

    const handleChangeIOSLightTheme = (color: string) => {
        dispatch(updateThemeColorIOS({ ...iosTheme, primaryColor: color }));
    };

    const handleChangeIOSDarkTheme = (color: string) => {
        dispatch(updateThemeColorIOS({ ...iosTheme, primaryColorDark: color }));
    };

    const handleChangeAndroidLightTheme = (color: string) => {
        dispatch(updateThemeColorAndroid({ ...androidTheme, primaryColor: color }));
    };

    const handleChangeAndroidDarkTheme = (color: string) => {
        dispatch(updateThemeColorAndroid({ ...androidTheme, primaryColorDark: color }));
    };

    return (
        <div className="py-6 xl:px-6 xl:py-10 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Theme Colors"
                subTitle="Set a Primary Color used for text fields and labels, also referred to as the Tint color for iOS and the Accent color for Android."
            >
                <div className="flex flex-col gap-4 px-8">
                    <ThemeColorsCard
                        os="IOS"
                        lightTheme={iosTheme.primaryColor}
                        darkTheme={iosTheme.primaryColorDark}
                        setDarkTheme={handleChangeIOSDarkTheme}
                        setLightTheme={handleChangeIOSLightTheme}
                    />
                    <ThemeColorsCard
                        os="Android"
                        lightTheme={androidTheme.primaryColor}
                        darkTheme={androidTheme.primaryColorDark}
                        setDarkTheme={handleChangeAndroidDarkTheme}
                        setLightTheme={handleChangeAndroidLightTheme}
                    />
                </div>
            </CollapsibleComponent>
        </div>
    );
}
