import { IWebsiteOveride } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IWebsiteOveride = {
    customUserAgent: {
        ios: "web2app",
        android: "web2app",
    },
    css: {
        android: "",
        ios: "",
    },
    script: {
        ios: "",
        android: "",
    },
};

const websiteOveride = createSlice({
    name: "websiteOveride",
    initialState: initialState,
    reducers: {
        setWebsiteOveride: (state: IWebsiteOveride, action: PayloadAction<IWebsiteOveride>) => {
            return { ...state, ...action.payload };
        },

        updateUserAgentIos: (state: IWebsiteOveride, action: PayloadAction<string>) => {
            state.customUserAgent.ios = action.payload;
        },
        updateUserAgentAndroid: (state: IWebsiteOveride, action: PayloadAction<string>) => {
            state.customUserAgent.android = action.payload;
        },

        updateCustomCssIos: (state: IWebsiteOveride, action: PayloadAction<string>) => {
            state.css.ios = action.payload;
        },
        updateCustomCssAndroid: (state: IWebsiteOveride, action: PayloadAction<string>) => {
            state.css.android = action.payload;
        },

        updateCustomScriptIos: (state: IWebsiteOveride, action: PayloadAction<string>) => {
            state.script.ios = action.payload;
        },

        updateCustomScriptAndroid: (state: IWebsiteOveride, action: PayloadAction<string>) => {
            state.script.android = action.payload;
        },
    },
});

export const {
    setWebsiteOveride,
    updateUserAgentIos,
    updateUserAgentAndroid,
    updateCustomCssIos,
    updateCustomCssAndroid,
    updateCustomScriptIos,
    updateCustomScriptAndroid,
} = websiteOveride.actions;

export default websiteOveride.reducer;

export { initialState as defaultWebsiteOverideState };
