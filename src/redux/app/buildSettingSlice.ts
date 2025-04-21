import { IBuildSettings } from "@/types/build-settings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IBuildSettings = {
    appIdentifiers: {
        ios: {
            bundleId: "",
        },
        android: {
            packageName: "",
            version: "",
        },
    },
    downloadLinks: {
        androidLink: "",
        androidAppBundleLink: "",
        androidSource: "",
        iosSource: "",
        iosLink: null,
    },
    androidLastBuiltDate: {
        binary: "",
        source: "",
    },
    iosLastBuiltDate: {
        binary: "",
        source: "",
    },
    androidLastBuiltBy: {
        source: "",
        sourceBuiltBySuperUser: false,
        binary: "",
    },
    iosLastBuiltBy: {
        source: "",
        sourceBuiltBySuperUser: false,
        binary: "",
    },
    androidReleaseSigningCertificate: {
        sha1: null,
        sha256: null,
        hash: null,
    },
    google_service: {
        android: "",
        ios: "",
    },
};

const buildSettingSlice = createSlice({
    name: "buildSetting",
    initialState,
    reducers: {
        setBuildSettings: (state: IBuildSettings, action: PayloadAction<IBuildSettings>) => {
            return { ...state, ...action.payload };
        },
        updateAppIdentifiersIos: (state: IBuildSettings, action: PayloadAction<string>) => {
            state.appIdentifiers.ios.bundleId = action.payload;
        },
        updateAppIdentifiersAndroid: (
            state: IBuildSettings,
            action: PayloadAction<IBuildSettings["appIdentifiers"]["android"]>
        ) => {
            state.appIdentifiers.android = action.payload;
        },

        updateDownloadLinks: (
            state: IBuildSettings,
            action: PayloadAction<IBuildSettings["downloadLinks"]>
        ) => {
            state.downloadLinks = action.payload;
        },
        updateAndroidLastBuiltDate: (
            state: IBuildSettings,
            action: PayloadAction<IBuildSettings["androidLastBuiltDate"]>
        ) => {
            state.androidLastBuiltDate = action.payload;
        },
        updateIosLastBuiltDate: (
            state: IBuildSettings,
            action: PayloadAction<IBuildSettings["iosLastBuiltDate"]>
        ) => {
            state.iosLastBuiltDate = action.payload;
        },
    },
});

export const {
    updateAppIdentifiersIos,
    setBuildSettings,
    updateAndroidLastBuiltDate,
    updateAppIdentifiersAndroid,
    updateDownloadLinks,
    updateIosLastBuiltDate,
} = buildSettingSlice.actions;

export default buildSettingSlice.reducer;
export { initialState as defaultBuildSettings };
