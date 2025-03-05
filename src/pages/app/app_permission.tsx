import PermissionHeader from "@/features/permission/PermissionHeader";
import JavascriptBridge from "@/features/permission/JavascriptBridge";
import AppTracking from "@/features/permission/AppTracking";
import LocationService from "@/features/permission/LocationService";
import WebRTC from "@/features/permission/WebRTC";
import DownloadDirectory from "@/features/permission/DownloadDirectory";
import BackgroundAudio from "@/features/permission/BackgroundAudio";
import ISOPermission from "@/features/permission/ISOPermission";

export const AppPermission = () => {
    return (
        <>
            <PermissionHeader />
            <JavascriptBridge />
            <AppTracking />
            <LocationService />
            <WebRTC />
            <DownloadDirectory />
            <BackgroundAudio />
            <ISOPermission />
        </>
    );
};
