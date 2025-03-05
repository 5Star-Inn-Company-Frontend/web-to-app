import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import CustomSound from "./CustomSound";

export default function NotificationSound() {
    return (
        <CollapseableWithArrow title="Notification Sound">
            <p className="text-sm text-primary60 mb-4">
                Optionally include your own custom notification sounds to specify in OneSignal and play on the user's
                device when the push notification is received. mp3 and wav files are supported.
            </p>
            <div>
                <CustomSound title="CUSTOM_SOUND_1" />
                <CustomSound title="CUSTOM_SOUND_2" />
                <CustomSound title="CUSTOM_SOUND_3" />
                <CustomSound title="CUSTOM_SOUND_4" />
            </div>
        </CollapseableWithArrow>
    );
}
