import { ILinkHandling, ILinkHandlingItem } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ILinkHandling = {
    internalVsExternalLinks: {
        active: true,
        items: [
            {
                mode: "external",
                label: "Non-web links",
                pagesToTrigger: "custom",
                regex: "^(?!https?://).*",
            },
            {
                mode: "appbrowser",
                label: "Facebook",
                pagesToTrigger: "custom",
                regex: "https?://([-\\w]+\\.)*facebook\\.com.*",
            },
            {
                mode: "appbrowser",
                label: "Twitter/X",
                pagesToTrigger: "custom",
                regex: "https?://([\\-\\w]+\\.)*(twitter|x)\\.com/.*",
            },
            {
                mode: "appbrowser",
                label: "Instagram",
                pagesToTrigger: "custom",
                regex: "https?://([-\\w]+\\.)*instagram\\.com/.*",
            },
            {
                mode: "appbrowser",
                label: "Google Maps",
                pagesToTrigger: "custom",
                regex: "https?://maps\\.google\\.com.*",
            },
            {
                mode: "appbrowser",
                label: "Google Maps Search",
                pagesToTrigger: "custom",
                regex: "https?://([-\\w]+\\.)*google\\.com/maps/search/.*",
            },
            {
                mode: "appbrowser",
                label: "LinkedIn",
                pagesToTrigger: "custom",
                regex: "https?://([-\\w]+\\.)*linkedin\\.com/.*",
            },
            {
                mode: "internal",
                label: "Microsoft Login",
                pagesToTrigger: "custom",
                regex: "https?://login\\.microsoftonline\\.com.*",
            },
            {
                mode: "internal",
                label: "All pages on my domain",
                pagesToTrigger: "domain",
                regex: "https?:\\/\\/([-\\w]+\\.)*5starcompany.com.ng(\\/.*)?$",
            },
            {
                mode: "appbrowser",
                label: "All Other Links",
                pagesToTrigger: "all",
                regex: ".*",
            },
        ],
        itemsDefault: [
            {
                mode: "external",
                label: "Non-web links",
                pagesToTrigger: "custom",
                regex: "^(?!https?://).*",
            },
            {
                mode: "appbrowser",
                label: "Facebook",
                pagesToTrigger: "custom",
                regex: "https?://([-\\w]+\\.)*facebook\\.com.*",
            },
            {
                mode: "appbrowser",
                label: "Twitter/X",
                pagesToTrigger: "custom",
                regex: "https?://([\\-\\w]+\\.)*(twitter|x)\\.com/.*",
            },
            {
                mode: "appbrowser",
                label: "Instagram",
                pagesToTrigger: "custom",
                regex: "https?://([-\\w]+\\.)*instagram\\.com/.*",
            },
            {
                mode: "appbrowser",
                label: "Google Maps",
                pagesToTrigger: "custom",
                regex: "https?://maps\\.google\\.com.*",
            },
            {
                mode: "appbrowser",
                label: "Google Maps Search",
                pagesToTrigger: "custom",
                regex: "https?://([-\\w]+\\.)*google\\.com/maps/search/.*",
            },
            {
                mode: "appbrowser",
                label: "LinkedIn",
                pagesToTrigger: "custom",
                regex: "https?://([-\\w]+\\.)*linkedin\\.com/.*",
            },
            {
                mode: "internal",
                label: "Microsoft Login",
                pagesToTrigger: "custom",
                regex: "https?://login\\.microsoftonline\\.com.*",
            },
            {
                mode: "internal",
                label: "All pages on my domain",
                pagesToTrigger: "domain",
                regex: "https?:\\/\\/([-\\w]+\\.)*5starcompany.com.ng(\\/.*)?$",
            },
            {
                mode: "appbrowser",
                label: "All Other Links",
                pagesToTrigger: "all",
                regex: ".*",
            },
        ],
    },
    universalLinks: ["5star.com", "5starttiti.com"],
    enableAndroidApplinks: false,
    androidApplinksCertHash:
        "6A:BE:8D:D0:DB:37:2B:66:CC:EC:A6:1F:8E:75:4C:71:DE:D5:86:5E:CF:FE:8F:F4:70:C3:82:D9:95:5E:FF:63",
    urlSchemeProtocol: "lamidiapp",
};

const linkHandling = createSlice({
    name: "linkHandling",
    initialState,
    reducers: {
        setLinkHandling: (state: ILinkHandling, action: PayloadAction<ILinkHandling>) => {
            return { ...state, ...action.payload };
        },

        restoreDefaultLinkHandling: (state: ILinkHandling) => {
            state.internalVsExternalLinks.items = state.internalVsExternalLinks.itemsDefault;
        },
        updateUrlScheme: (state: ILinkHandling, action: PayloadAction<string>) => {
            state.urlSchemeProtocol = action.payload;
        },

        updateUniversalLink: (state: ILinkHandling, action: PayloadAction<string[]>) => {
            state.universalLinks = action.payload;
        },

        updateNewWindow: (state: ILinkHandling, action: PayloadAction<boolean>) => {
            state.internalVsExternalLinks.active = action.payload;
        },

        updateLinkBehaviour: (state: ILinkHandling, action: PayloadAction<ILinkHandlingItem[]>) => {
            state.internalVsExternalLinks.items = action.payload;
        },
    },
});

export const {
    setLinkHandling,
    updateLinkBehaviour,
    updateNewWindow,
    updateUniversalLink,
    updateUrlScheme,
    restoreDefaultLinkHandling,
} = linkHandling.actions;

export default linkHandling.reducer;

export { initialState as defaultLinkHandlingState };
