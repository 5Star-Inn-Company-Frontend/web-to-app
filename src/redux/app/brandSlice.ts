import { IBranding } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IBranding = {
    app_icon: "",
    splash_screen: "enable",
    theme_color: "#FF5733",
    status_bar: "overlay",
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

        updateSplashScreen: (state: IBranding, action: PayloadAction<"enable" | "disable">) => {
            state.splash_screen = action.payload;
        },

        updateThemeColor: (state: IBranding, action: PayloadAction<string>) => {
            state.theme_color = action.payload;
        },

        updateStatusBar: (state: IBranding, action: PayloadAction<string>) => {
            state.status_bar = action.payload;
        },
    },
});

export const { setBranding, updateAppIcon, updateSplashScreen, updateThemeColor, updateStatusBar } =
    brandingSlice.actions;

export default brandingSlice.reducer;

export { initialState as defaultBrandingState };
