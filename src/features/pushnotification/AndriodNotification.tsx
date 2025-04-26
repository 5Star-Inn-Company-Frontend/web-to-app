import { fileUpload } from "@/api/app";
import CollapseableWithArrow from "@/components/CollapseableWithArrow";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateNotificationIcon } from "@/redux/app/NotificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import { FaAndroid } from "react-icons/fa6";

export default function AndriodNotification() {
    const dispatch = useAppDispatch();
    const notificationIconUrl = useAppSelector(
        (state: RootState) => state.apps.notification.notification_icon.android
    );

    const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const imgUrl = await toast.promise(fileUpload(file), {
                loading: "Uploading...",
                success: "Upload successful!",
                error: "Error uploading file",
            });

            dispatch(updateNotificationIcon(imgUrl.url));
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "An unknown error occurred";
            toast.error("Error uploading file: " + errorMessage);
        }
    };

    return (
        <CollapseableWithArrow title="Andriod Notification Icon">
            <p className="text-sm text-primary60 mb-4">
                Android notification icons are built into your app and must be a monochromatic image
                with transparent background.
            </p>

            <div className="border border-primary60 rounded-lg xl:w-[60%]">
                <div className="flex items-center gap-x-2 px-5 py-3 border-b border-primary60">
                    <FaAndroid />
                    <span>Andriod</span>
                </div>
                <div className="px-5 py-4 flex  items-center justify-between ">
                    <Label htmlFor="picture" className="border cursor-pointer py-2 px-5 rounded-md">
                        Change Image
                    </Label>
                    <Input
                        onChange={handleChangeFile}
                        id="picture"
                        type="file"
                        className="hidden"
                    />
                    {notificationIconUrl ? (
                        <div className="w-20 h-20 flex items-center justify-center">
                            <img src={notificationIconUrl} alt="notification icon" />
                        </div>
                    ) : (
                        <div className="bg-primary80 w-20 h-20 flex items-center justify-center">
                            <FaAndroid className="text-white text-5xl" />
                        </div>
                    )}
                </div>
            </div>
        </CollapseableWithArrow>
    );
}
