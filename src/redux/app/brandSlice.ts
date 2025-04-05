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

        updateSplashScreen: (
            state: IBranding,
            action: PayloadAction<IBranding["splashScreen"]>
        ) => {
            state.splashScreen = { ...state.splashScreen, ...action.payload };
        },

        updateThemeColor: (state: IBranding, action: PayloadAction<IBranding["themeColors"]>) => {
            state.themeColors = { ...state.themeColors, ...action.payload };
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
    updateSplashScreen,
    updateThemeColor,
    updateStatusBar,
} = brandingSlice.actions;

export default brandingSlice.reducer;

export { initialState as defaultBrandingState };
