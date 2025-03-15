import { IPermission } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPermission = {
    javascript_bridge: [],
    app_tracking_transparency: false,
    location_service: true,
    media: { camera: true, microphone: false },
    downloads_directory: "files saved private to app",
    background_audio: true,
    permission: [],
};

const permission = createSlice({
    name: "permission",
    initialState,
    reducers: {
        setPermission: (state: IPermission, action: PayloadAction<IPermission>) => {
            return { ...state, ...action.payload };
        },

        updateJavascript: (state: IPermission, action: PayloadAction<string[]>) => {
            state.permission = action.payload;
        },

        updateAppTracking: (state: IPermission, action: PayloadAction<boolean>) => {
            state.app_tracking_transparency = action.payload;
        },

        updateLocationService: (state: IPermission, action: PayloadAction<boolean>) => {
            state.location_service = action.payload;
        },

        updateMediaMicrophone: (state: IPermission, action: PayloadAction<boolean>) => {
            state.media.microphone = action.payload;
        },

        updateMediaCamera: (state: IPermission, action: PayloadAction<boolean>) => {
            state.media.camera = action.payload;
        },

        updateDownloadDirectory: (state: IPermission, action: PayloadAction<string>) => {
            state.downloads_directory = action.payload;
        },

        updateBackgroundAudio: (state: IPermission, action: PayloadAction<boolean>) => {
            state.background_audio = action.payload;
        },

        updatePermission: (state: IPermission, action: PayloadAction<string[]>) => {
            state.permission = action.payload;
        },
    },
});

export const {
    setPermission,
    updateJavascript,
    updateAppTracking,
    updateLocationService,
    updateMediaCamera,
    updateMediaMicrophone,
    updateDownloadDirectory,
    updateBackgroundAudio,
    updatePermission,
} = permission.actions;

export default permission.reducer;

export { initialState as defaultPermissionState };
