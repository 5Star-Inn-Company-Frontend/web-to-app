import { IBranding } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IBranding = {
    app_icon: "",
    icons: {
        ios: "",
        android: "",
    },
    splashScreen: {
        ios: {
            launchImages: "",
            launchImagesDark: "",
            showSplash: true,
            backgroundColor: "#FFFFFF",
            backgroundColorDark: "#000000",
        },
        android: {
            launchImages: "",
            launchImagesDark: "",
            showSplash: true,
            backgroundColor: "#FFFFFF",
            backgroundColorDark: "#000000",
        },
    },
    themeColors: {
        ios: {
            primaryColor: "#007aff",
            primaryColorDark: "#adc5dc",
        },
        android: {
            primaryColor: "#009688",
            primaryColorDark: "#80cbc4",
        },
    },
    statusBar: {
        ios: {
            style: "auto",
            overlay: false,
            blur: false,
            backgroundColor: "#ffffffff",
            backgroundColorDark: "#000000",
        },
        android: {
            style: "auto",
            overlay: false,
            blur: false,
            backgroundColor: "#5C5C5C",
            backgroundColorDark: "#333333",
        },
    },
};

const brandingSlice = createSlice({
    name: "branding",
    initialState: initialState,
    reducers: {
        setBranding: (state: IBranding, action: PayloadAction<IBranding>) => {
            return { ...state, ...action.payload };
        },

        updateAppIconIos: (state: IBranding, action: PayloadAction<string>) => {
            state.icons.ios = action.payload;
        },

        updateAppIconAndroid: (state: IBranding, action: PayloadAction<string>) => {
            state.icons.android = action.payload;
        },

        updateIcon: (state: IBranding, action: PayloadAction<IBranding["icons"]>) => {
            state.icons = action.payload;
        },

        updateSplashScreenIOS: (
            state: IBranding,
            action: PayloadAction<IBranding["splashScreen"]["ios"]>
        ) => {
            state.splashScreen.ios = action.payload;
        },
        updateSplashScreenAndroid: (
            state: IBranding,
            action: PayloadAction<IBranding["splashScreen"]["android"]>
        ) => {
            state.splashScreen.android = action.payload;
        },

        updateThemeColorIOS: (
            state: IBranding,
            action: PayloadAction<IBranding["themeColors"]["ios"]>
        ) => {
            state.themeColors.ios = action.payload;
        },
        updateThemeColorAndroid: (
            state: IBranding,
            action: PayloadAction<IBranding["themeColors"]["android"]>
        ) => {
            state.themeColors.android = action.payload;
        },

        updateStatusBarIOS: (
            state: IBranding,
            action: PayloadAction<IBranding["statusBar"]["ios"]>
        ) => {
            state.statusBar.ios = action.payload;
        },

        updateStatusBarAndroid: (
            state: IBranding,
            action: PayloadAction<IBranding["statusBar"]["android"]>
        ) => {
            state.statusBar.android = action.payload;
        },
    },
});

export const {
    setBranding,
    updateIcon,
    updateStatusBarIOS,
    updateStatusBarAndroid,
    updateSplashScreenAndroid,
    updateThemeColorAndroid,
    updateThemeColorIOS,
    updateSplashScreenIOS,
    updateAppIconAndroid,
    updateAppIconIos,
} = brandingSlice.actions;

export default brandingSlice.reducer;

export { initialState as defaultBrandingState };
