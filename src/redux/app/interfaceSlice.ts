import { IInterface } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInterface = {
    screen_on: true,
    full_screen: false,
    dark_mode: "auto",
    screen_orientation: "auto rotate",
    pull_to_refresh: true,
    swipe_gesture: true,
    pitch_to_zoom: false,
    accessibility: true,
    front_scaling: true,
    maximum_window: false,
    view_port_width: true,
    localization: ["Arabic", "Chinese", "English"],
};

const interfaceSlice = createSlice({
    name: "interface",
    initialState,
    reducers: {
        updateInterface: (state: IInterface, action: PayloadAction<IInterface>) => {
            return { ...state, ...action.payload };
        },

        updateLocalization: (state: IInterface, action: PayloadAction<string[]>) => {
            state.localization = action.payload;
        },

        updateViewPortWidth: (state: IInterface, action: PayloadAction<boolean>) => {
            state.view_port_width = action.payload;
        },

        updateMaximumWindow: (state: IInterface, action: PayloadAction<boolean>) => {
            state.maximum_window = action.payload;
        },

        updateFrontScaling: (state: IInterface, action: PayloadAction<boolean>) => {
            state.front_scaling = action.payload;
        },

        updateAccessibility: (state: IInterface, action: PayloadAction<boolean>) => {
            state.accessibility = action.payload;
        },

        updatePitchToZoom: (state: IInterface, action: PayloadAction<boolean>) => {
            state.pitch_to_zoom = action.payload;
        },

        updateSwipeGesture: (state: IInterface, action: PayloadAction<boolean>) => {
            state.swipe_gesture = action.payload;
        },

        updatePullToRefresh: (state: IInterface, action: PayloadAction<boolean>) => {
            state.pull_to_refresh = action.payload;
        },

        updateScreenOrientation: (state: IInterface, action: PayloadAction<string>) => {
            state.screen_orientation = action.payload;
        },

        updateDarkMode: (state: IInterface, action: PayloadAction<string>) => {
            state.dark_mode = action.payload;
        },

        updateFullScreen: (state: IInterface, action: PayloadAction<boolean>) => {
            state.full_screen = action.payload;
        },

        updateScreenOn: (state: IInterface, action: PayloadAction<boolean>) => {
            state.screen_on = action.payload;
        },
    },
});

export const {
    updateInterface,
    updateAccessibility,
    updateDarkMode,
    updateFrontScaling,
    updateFullScreen,
    updateLocalization,
    updateMaximumWindow,
    updatePitchToZoom,
    updatePullToRefresh,
    updateScreenOn,
    updateScreenOrientation,
    updateSwipeGesture,
    updateViewPortWidth,
} = interfaceSlice.actions;

export default interfaceSlice.reducer;

export { initialState as defaultInterfaceSliceState };
