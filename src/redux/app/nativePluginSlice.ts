// interface IPluginState {

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type d = {
    id: string;
    name: string;
    isActive: boolean;
    amount: string;
    docLink: string;
};

type TInitialState = d[];

const initialState = [
    {
        id: "one_signal",
        name: "OneSignal",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "social_login",
        name: "Social Login",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "qr_scanner",
        name: "QR / Barcode Scanner",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "g_firbase_analytics",
        name: "Google Firebase Analytics",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "biometrics",
        name: "Face ID/Touch ID Android Biometrics",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "inapp_purchases",
        name: "In-App Purchases",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "app_review",
        name: "App Review",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "share_into_app",
        name: "Share into app",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "native_datastore",
        name: "Native Datastore",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "background_location",
        name: "Background Location",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "haptics",
        name: "Haptics",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "native_media_player",
        name: "Native Media Player",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "native_contacts",
        name: "Native Contacts",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "document_scanner",
        name: "Document Scanner",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "calendar",
        name: "Calendar",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "nfc_scanner",
        name: "NFC Tag Scanner",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "zoom",
        name: "Zoom",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
    {
        id: "konn3ct",
        name: "Konn3ct",
        isActive: false,
        amount: "2000",
        docLink: "https://web2app.5starcompany.com.ng",
    },
];

const pluginSlice = createSlice({
    name: "plugin",
    initialState,
    reducers: {
        updatePlugin: (state: TInitialState, action: PayloadAction<TInitialState>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updatePlugin } = pluginSlice.actions;
export default pluginSlice.reducer;
