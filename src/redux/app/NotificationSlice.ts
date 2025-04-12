import { INotification } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: INotification = {
    oneSignal: {
        active: true,
        autoRegister: true,
        requiresUserPrivacyConsent: false,
        showForegroundNotifications: true,
        applicationId: "9a1b27aa-b8a2-4347-abb4-d6bc7c12af8c",
    },
    notification_icon: {
        android: "",
    },
    notification_sound: [],
};

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialState,
    reducers: {
        setNotification: (state: INotification, action: PayloadAction<INotification>) => {
            return { ...state, ...action.payload };
        },

        updateOneSignal: (
            state: INotification,
            action: PayloadAction<INotification["oneSignal"]>
        ) => {
            state.oneSignal = action.payload;
        },

        updateNotificationIcon: (state: INotification, action: PayloadAction<string>) => {
            state.notification_icon.android = action.payload;
        },
        updateNotificationSound: (
            state: INotification,
            action: PayloadAction<INotification["notification_sound"]>
        ) => {
            state.notification_sound = action.payload;
        },
    },
});

export const { setNotification, updateOneSignal, updateNotificationIcon, updateNotificationSound } =
    notificationSlice.actions;

export default notificationSlice.reducer;

export { initialState as defaultNotificationState };
