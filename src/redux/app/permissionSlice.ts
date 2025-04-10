import { IPermission } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPermission = {
    javascript_bridge: [],
    appTrackingTransparency: {
        ios: false,
    },
    locationServices: {
        android: false,
    },
    webRtc: {
        android: {
            cameraActive: false,
            microphoneActive: false,
        },
    },
    downloadsDirectory: {
        android: "internal",
    },
    backgroundAudio: {
        ios: true,
    },
    camera: {
        ios: {
            description: "",
        },
    },
    microphone: {
        ios: {
            description: "",
        },
    },
    location: {
        ios: {
            description: "",
        },
    },
};

const permission = createSlice({
    name: "permission",
    initialState,
    reducers: {
        setPermission: (state: IPermission, action: PayloadAction<IPermission>) => {
            return { ...state, ...action.payload };
        },

        updateJavascript: (state: IPermission, action: PayloadAction<string[]>) => {
            state.javascript_bridge = action.payload;
        },

        updateAppTracking: (state: IPermission, action: PayloadAction<boolean>) => {
            state.appTrackingTransparency.ios = action.payload;
        },

        updateLocationService: (state: IPermission, action: PayloadAction<boolean>) => {
            state.locationServices.android = action.payload;
        },

        updateWebRtc: (
            state: IPermission,
            action: PayloadAction<IPermission["webRtc"]["android"]>
        ) => {
            state.webRtc.android = action.payload;
        },

        updateDownloadDirectory: (state: IPermission, action: PayloadAction<string>) => {
            state.downloadsDirectory.android = action.payload;
        },

        updateBackgroundAudio: (state: IPermission, action: PayloadAction<boolean>) => {
            state.backgroundAudio.ios = action.payload;
        },

        updatePermissionCamera: (state: IPermission, action: PayloadAction<string>) => {
            state.camera.ios.description = action.payload;
        },
        updatePermissionMicrophone: (state: IPermission, action: PayloadAction<string>) => {
            state.microphone.ios.description = action.payload;
        },
        updatePermissionLocation: (state: IPermission, action: PayloadAction<string>) => {
            state.location.ios.description = action.payload;
        },
    },
});

export const {
    setPermission,
    updateJavascript,
    updateAppTracking,
    updateLocationService,
    updateDownloadDirectory,
    updateBackgroundAudio,
    updatePermissionCamera,
    updatePermissionLocation,
    updatePermissionMicrophone,
    updateWebRtc,
} = permission.actions;

export default permission.reducer;

export { initialState as defaultPermissionState };
