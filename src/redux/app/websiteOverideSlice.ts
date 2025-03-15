import { IWebsiteOveride } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IWebsiteOveride = {
    user_agent: "enable",
    custom_css: [],
    cookie_persistence: "default",
    custom_javascript: [],
};

const websiteOveride = createSlice({
    name: "websiteOveride",
    initialState: initialState,
    reducers: {
        setWebsiteOveride: (state: IWebsiteOveride, action: PayloadAction<IWebsiteOveride>) => {
            return { ...state, ...action.payload };
        },

        updateUserAgent: (state: IWebsiteOveride, action: PayloadAction<string>) => {
            state.user_agent = action.payload;
        },

        updateCustomCss: (state: IWebsiteOveride, action: PayloadAction<string[]>) => {
            state.custom_css = action.payload;
        },

        updateCookiePresistence: (state: IWebsiteOveride, action: PayloadAction<string>) => {
            state.cookie_persistence = action.payload;
        },

        updateCustomJavascript: (state: IWebsiteOveride, action: PayloadAction<string[]>) => {
            state.custom_javascript = action.payload;
        },
    },
});

export const {
    setWebsiteOveride,
    updateUserAgent,
    updateCustomCss,
    updateCookiePresistence,
    updateCustomJavascript,
} = websiteOveride.actions;

export default websiteOveride.reducer;

export { initialState as defaultWebsiteOverideState };
