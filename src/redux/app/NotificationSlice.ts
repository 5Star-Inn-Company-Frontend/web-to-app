import { INotification } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: INotification = {
    signal: true,
    legacy_mode: false,
    app_id: "ikwwiniwe",
    automatic_registration: true,
    automatic_data_transmission: "automatic",
    foreground_notification: "show",
    android_notifications_icon: null,
    notification_sound: [],
};

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialState,
    reducers: {
        setNotification: (state: INotification, action: PayloadAction<INotification>) => {
            return { ...state, ...action.payload };
        },

        updateNotificationSound: (state: INotification, action: PayloadAction<string[]>) => {
            state.notification_sound = action.payload;
        },

        updateForegroundNotification: (state: INotification, action: PayloadAction<string>) => {
            state.foreground_notification = action.payload;
        },

        updateAutoDataTransmission: (state: INotification, action: PayloadAction<"automatic" | "manual">) => {
            state.automatic_data_transmission = action.payload;
        },

        updateAutoRegistration: (state: INotification, action: PayloadAction<boolean>) => {
            state.automatic_registration = action.payload;
        },

        updateAppId: (state: INotification, action: PayloadAction<string>) => {
            state.app_id = action.payload;
        },
        updateLegacyMode: (state: INotification, action: PayloadAction<boolean>) => {
            state.legacy_mode = action.payload;
        },

        updateSignal: (state: INotification, action: PayloadAction<boolean>) => {
            state.signal = action.payload;
        },
    },
});

export const {
    setNotification,
    updateNotificationSound,
    updateForegroundNotification,
    updateAutoDataTransmission,
    updateAutoRegistration,
    updateAppId,
    updateLegacyMode,
    updateSignal,
} = notificationSlice.actions;

export default notificationSlice.reducer;

export { initialState as defaultNotificationState };
