import NotificationHeader from "@/features/pushnotification/NotificationHeader";
import EnableOneTimePayment from "@/features/pushnotification/EnableOneTimePayment";
import EnableOneSignal from "@/features/pushnotification/EnableOneSignal";
import AppID from "@/features/pushnotification/AppID";
import AppRegistration from "@/features/pushnotification/AppRegistration";
import AutomaticDataTransmission from "@/features/pushnotification/AutomaticDataTransmission";
import ForegroundNotification from "@/features/pushnotification/ForegroundNotification";
import AndriodNotification from "@/features/pushnotification/AndriodNotification";
import NotificationSound from "@/features/pushnotification/NotificationSound";

export function PushNotification() {
    return (
        <>
            <NotificationHeader />
            <EnableOneTimePayment />
            <EnableOneSignal />
            <AppID />
            <AppRegistration />
            <AutomaticDataTransmission />
            <ForegroundNotification />
            <AndriodNotification />
            <NotificationSound />
        </>
    );
}
