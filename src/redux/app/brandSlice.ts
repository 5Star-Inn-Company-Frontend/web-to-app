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

        updateAppIcon: (state: IBranding, action: PayloadAction<string>) => {
            state.app_icon = action.payload;
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

        updateStatusBar: (state: IBranding, action: PayloadAction<IBranding["statusBar"]>) => {
            state.statusBar = { ...state.statusBar, ...action.payload };
        },
    },
});

export const {
    setBranding,
    updateAppIcon,
    updateIcon,
    updateStatusBar,
    updateSplashScreenAndroid,
    updateThemeColorAndroid,
    updateThemeColorIOS,
    updateSplashScreenIOS,
} = brandingSlice.actions;

export default brandingSlice.reducer;

export { initialState as defaultBrandingState };
