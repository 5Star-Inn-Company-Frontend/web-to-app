import WebOverridesHeading from "@/features/webOverrides/WebOverridesHeading";
import UserAgent from "@/features/webOverrides/UserAgent";
import CustomCss from "@/features/webOverrides/CustomCss";
import CookiePersistence from "@/features/webOverrides/CookiePersistence";
import CustomJavascript from "@/features/webOverrides/CustomJavascript";

export const WebOverides = () => {
    return (
        <>
            <WebOverridesHeading />
            <UserAgent />
            <CustomCss />
            <CookiePersistence />
            <CustomJavascript />
        </>
    );
};
