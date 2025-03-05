import BrandingHeader from "@/features/branding/BrandingHeader";
import AppIcon from "@/features/branding/AppIcon";
import SplashScreen from "@/features/branding/splashScreen";
import ThemeColor from "@/features/branding/ThemeColor";
import StatusBar from "@/components/customui/app/branding/StatusBar";

export const Branding = () => {
    return (
        <>
            <BrandingHeader />
            <AppIcon />
            <SplashScreen />
            <ThemeColor />
            <StatusBar />
        </>
    );
};
