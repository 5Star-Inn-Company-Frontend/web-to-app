import { IInterface } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInterface = {
    keepScreenOn: true,
    fullScreen: {
        ios: true,
        android: true,
    },
    darkMode: {
        ios: "dark",
        android: "auto",
    },
    screenOrientation: {
        iphone: "auto",
        ipad: "auto",
        androidPhone: "auto",
        androidTablet: "auto",
    },
    nativePageTransitions: {
        active: true,
        alpha: 0.5,
    },
    spinner: {
        android: {
            color: "#808080",
            colorDark: "#808080",
        },
        ios: {
            color: "#808080",
            colorDark: "#808080",
        },
    },
    pullToRefresh: {
        ios: {
            active: true,
        },
        android: {
            active: false,
            iconColor: "#1A100B",
            iconColorDark: "#FFFFFF",
        },
    },
    swipeGestures: {
        value: true,
        android: {
            backgroundColor: "#FFFFFF",
            backgroundColorDark: "#333333",
            activeColor: "#000000",
            activeColorDark: "#FFFFFF",
            inactiveColor: "#666666",
            inactiveColorDark: "#666666",
        },
    },
    pinchToZoom: {
        ios: false,
        android: true,
    },
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

        updateKeepScreenOn: (state: IInterface, action: PayloadAction<boolean>) => {
            state.keepScreenOn = action.payload;
        },

        updateFullScreen: (state: IInterface, action: PayloadAction<IInterface["fullScreen"]>) => {
            state.fullScreen = action.payload;
        },

        updateDarkMode: (state: IInterface, action: PayloadAction<IInterface["darkMode"]>) => {
            state.darkMode = action.payload;
        },

        updateScreenOrientation: (
            state: IInterface,
            action: PayloadAction<IInterface["screenOrientation"]>
        ) => {
            state.screenOrientation = action.payload;
        },

        updateLocalization: (state: IInterface, action: PayloadAction<string[]>) => {
            state.localization = action.payload;
        },

        updateNativePageTransition: (
            state: IInterface,
            action: PayloadAction<IInterface["nativePageTransitions"]>
        ) => {
            state.nativePageTransitions = action.payload;
        },

        updateSpinnerIos: (
            state: IInterface,
            action: PayloadAction<IInterface["spinner"]["ios"]>
        ) => {
            state.spinner.ios = action.payload;
        },

        updateSpinnerAndroid: (
            state: IInterface,
            action: PayloadAction<IInterface["spinner"]["android"]>
        ) => {
            state.spinner.android = action.payload;
        },

        updatePullToRefreshIos: (
            state: IInterface,
            action: PayloadAction<IInterface["pullToRefresh"]["ios"]>
        ) => {
            state.pullToRefresh.ios = action.payload;
        },
        updatePullToRefreshAndroid: (
            state: IInterface,
            action: PayloadAction<IInterface["pullToRefresh"]["android"]>
        ) => {
            state.pullToRefresh.android = action.payload;
        },
        updateSwipeGesture: (state: IInterface, action: PayloadAction<boolean>) => {
            state.swipeGestures.value = action.payload;
        },

        updateSwipeGestureAndroid: (
            state: IInterface,
            action: PayloadAction<IInterface["swipeGestures"]["android"]>
        ) => {
            state.swipeGestures.android = action.payload;
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
        updatePitchToZoomIos: (
            state: IInterface,
            action: PayloadAction<IInterface["pinchToZoom"]["ios"]>
        ) => {
            state.pinchToZoom.ios = action.payload;
        },
        updatePitchToZoomAndroid: (
            state: IInterface,
            action: PayloadAction<IInterface["pinchToZoom"]["android"]>
        ) => {
            state.pinchToZoom.android = action.payload;
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
    updateScreenOrientation,
    updateSwipeGesture,
    updateViewPortWidth,
    updateKeepScreenOn,
    updateNativePageTransition,
    updatePullToRefreshAndroid,
    updatePullToRefreshIos,
    updateSpinnerAndroid,
    updateSpinnerIos,
    updateSwipeGestureAndroid,
} = interfaceSlice.actions;

export default interfaceSlice.reducer;

export { initialState as defaultInterfaceSliceState };
