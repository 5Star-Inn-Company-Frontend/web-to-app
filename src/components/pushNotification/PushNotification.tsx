import NotificationHeader from "@/features/pushnotification/NotificationHeader";
import EnableOneTimePayment from "@/features/pushnotification/EnableOneTimePayment";
import EnableOneSignal from "@/features/pushnotification/EnableOneSignal";
import EnableLegacyMode from "@/features/pushnotification/EnableLegacyMode";
import AppID from "@/features/pushnotification/AppID";
import AppRegistration from "@/features/pushnotification/AppRegistration";
import AutomaticDataTransmission from "@/features/pushnotification/AutomaticDataTransmission";
import ForegroundNotification from "@/features/pushnotification/ForegroundNotification";
import AndriodNotification from "@/features/pushnotification/AndriodNotification";
import AutoDataTransmission from "@/features/pushnotification/AutoDataTransmission";
import NotificationSound from "@/features/pushnotification/NotificationSound";

export function PushNotification() {
    return (
        <>
            <NotificationHeader />
            <EnableOneTimePayment />
            <EnableOneSignal />
            <EnableLegacyMode />
            <AppID />
            <AppRegistration />
            <AutomaticDataTransmission />
            <ForegroundNotification />
            <AndriodNotification />
            <AutoDataTransmission />
            <NotificationSound />
        </>
    );
}
