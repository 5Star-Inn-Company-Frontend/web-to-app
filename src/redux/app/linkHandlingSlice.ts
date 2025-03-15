import { ILinkHandling } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ILinkHandling = {
    link_behaviour: true,
    new_window: "permitted",
    universal_link: "domain",
    url_scheme: "https",
};

const linkHandling = createSlice({
    name: "linkHandling",
    initialState,
    reducers: {
        setLinkHandling: (state: ILinkHandling, action: PayloadAction<ILinkHandling>) => {
            return { ...state, ...action.payload };
        },

        updateUrlScheme: (state: ILinkHandling, action: PayloadAction<string>) => {
            state.url_scheme = action.payload;
        },

        updateUniversalLink: (state: ILinkHandling, action: PayloadAction<string>) => {
            state.universal_link = action.payload;
        },

        updateNewWindow: (state: ILinkHandling, action: PayloadAction<string>) => {
            state.new_window = action.payload;
        },

        updateLinkBehaviour: (state: ILinkHandling, action: PayloadAction<boolean>) => {
            state.link_behaviour = action.payload;
        },
    },
});

export const {
    setLinkHandling,
    updateLinkBehaviour,
    updateNewWindow,
    updateUniversalLink,
    updateUrlScheme,
} = linkHandling.actions;

export default linkHandling.reducer;

export { initialState as defaultLinkHandlingState };
