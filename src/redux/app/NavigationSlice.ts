import { IContextualNavToolbar, INavigation, ITopNavBar } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: INavigation = {
    topNavigationBar: {
        enable: {
            ios: {
                active: true,
            },
            android: {
                active: true,
            },
        },
        styling: {
            ios: {
                defaultDisplay: "text",
                imageType: "appIcon",
                newImage: "assets/defaults/app-icon-placeholder.png",
                newImageDark: "assets/defaults/app-icon-placeholder.png",
                textColor: "#333333",
                textColorDark: "#adc5dc",
                tintColor: "#f8f8f8",
                tintColorDark: "#333333",
            },
            android: {
                backgroundColor: "#FFFFFF",
                backgroundColorDark: "#333333",
                defaultDisplay: "text",
                imageType: "appIcon",
                newImage: "assets/defaults/app-icon-placeholder.png",
                newImageDark: "assets/defaults/app-icon-placeholder.png",
                textColor: "#1A100B",
                textColorDark: "#FFFFFF",
            },
        },
        autoNewWindows: {
            active: true,
            items: [[]],
        },
        dynamicTitles: {
            active: true,
            items: [],
        },
        customIcons: {
            actions: [],
            actionSelection: [],
            active: true,
        },
        refreshButton: {
            ios: {
                active: false,
            },
            android: {
                active: false,
            },
        },
        top_navigate_bar_visual_editor: {
            pages_to_display_top_nav_bar: "multiple pages",
            display_mode: "page title",
        },
    },
    sidebarNavigationBar: {
        active: false,
        styling: {
            ios: {
                backgroundColor: "#f8f8f8",
                backgroundColorDark: "#333333",
                sidebarFont: "Default",
                sidebarImage:
                    "https://s3.amazonaws.com/gonativeio/images_generated/pkt29zhnu29u0_1694683672242.png",
                sidebarImageDark:
                    "https://s3.amazonaws.com/gonativeio/images_generated/pkt29zhnu29u0_1694683672242.png",
                textColor: "#333333",
                textColorDark: "#adc5dc",
                type: "appIcon",
            },
            android: {
                showAppName: true,
                showLogo: true,
                backgroundColor: "#FFFFFF",
                backgroundColorDark: "#333333",
                foregroundColor: "#1A100B",
                foregroundColorDark: "#FFFFFF",
                separatorColor: "#CCCCCC",
                separatorColorDark: "#666666",
                highlightColor: "#1A100B",
                highlightColorDark: "#FFFFFF",
            },
        },
        sidebarItems: {
            menuSelectionConfig: {
                redirectLocations: [
                    {
                        regex: ".*",
                        menuName: "default",
                        loggedIn: true,
                    },
                ],
            },
            menus: [
                {
                    active: false,
                    items: [
                        {
                            url: "https://webhosting.5starcompany.com.ng/index.php",
                            label: "",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/#",
                            label: "Store",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php",
                            label: "Browse all",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=4",
                            label: "Shared hosting",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=1",
                            label: "Ssl certificates",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=8",
                            label: "Web design",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=10",
                            label: "Developer hosting",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=2",
                            label: "Weebly website builder",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=3",
                            label: "Email spam filtering",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=9",
                            label: "Web development",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=5",
                            label: "Re-seller hosting",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=6",
                            label: "Vps hosting",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?gid=7",
                            label: "Dedicated server",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/index.php?rp=/store/ssl-certificates",
                            label: "Ssl certificates",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/index.php?rp=/store/website-builder",
                            label: "Website builder",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/index.php?rp=/store/email-services",
                            label: "E-mail services",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?a=add&domain=register",
                            label: "Register a new domain",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/cart.php?a=add&domain=transfer",
                            label: "Transfer domains to us",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/index.php?rp=/announcements",
                            label: "Announcements",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/index.php?rp=/knowledgebase",
                            label: "Knowledgebase",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/serverstatus.php",
                            label: "Network status",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/affiliates.php",
                            label: "Affiliates",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/contact.php",
                            label: "Contact us",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/clientarea.php",
                            label: "Login",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/register.php",
                            label: "Register",
                            subLinks: [],
                        },
                        {
                            url: "https://webhosting.5starcompany.com.ng/pwreset.php",
                            label: "Forgot password?",
                            subLinks: [],
                        },
                        {
                            url: "https://tawk.to/chat/5b3a09246d961556373d53e3/default/?$_tawk_popout=true",
                            label: "Chat now",
                            subLinks: [],
                        },
                    ],
                    name: "default",
                },
            ],
        },
    },
    bottomTabBar: {
        active: false,
        styling: {
            android: {
                backgroundColor: "#FFFFFF",
                backgroundColorDark: "#333333",
                textColor: "#949494",
                textColorDark: "#FFFFFF",
                indicatorColor: "#1A100B",
                indicatorColorDark: "#666666",
            },
            ios: {
                tintColor: "#f8f8f8",
                tintColorDark: "#333333",
                inactiveColor: "#A1A1A1",
                inactiveColorDark: "#818181",
            },
        },
        bottomTabBarItems: {
            active: false,
            tabMenus: [],
            tabSelectionConfig: [],
        },
    },
    contextual_nav_toolbar: {
        enable: "auto",
        toolbar_visibility_by_pages: "all pages",
        back_button_configuration: {
            label: "no text",
            pages_to_activate_button: "all pages",
        },
        refresh_button_configuration: true,
        forward_button_configuration: true,
    },
};

const navigation = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        updateNavigation: (state: INavigation, action: PayloadAction<INavigation>) => {
            return { ...state, ...action.payload };
        },

        updateTopNavEnableIos: (
            state: INavigation,
            action: PayloadAction<INavigation["topNavigationBar"]["enable"]["ios"]>
        ) => {
            state.topNavigationBar.enable.ios = action.payload;
        },
        updateTopNavEnableAndroid: (
            state: INavigation,
            action: PayloadAction<INavigation["topNavigationBar"]["enable"]["android"]>
        ) => {
            state.topNavigationBar.enable.android = action.payload;
        },

        updateTopNavStylingIos: (
            state: INavigation,
            action: PayloadAction<ITopNavBar["styling"]["ios"]>
        ) => {
            state.topNavigationBar.styling.ios = action.payload;
        },
        updateTopNavStylingAndroid: (
            state: INavigation,
            action: PayloadAction<ITopNavBar["styling"]["android"]>
        ) => {
            state.topNavigationBar.styling.android = action.payload;
        },

        updateTopNavigatePagesToDisplay: (state: INavigation, action: PayloadAction<string>) => {
            state.topNavigationBar.top_navigate_bar_visual_editor.pages_to_display_top_nav_bar =
                action.payload;
        },

        updateTopNavigateDisplayMode: (state: INavigation, action: PayloadAction<string>) => {
            state.topNavigationBar.top_navigate_bar_visual_editor.display_mode = action.payload;
        },

        updateSideNavActive: (state: INavigation, action: PayloadAction<boolean>) => {
            state.sidebarNavigationBar.active = action.payload;
        },

        updateSideNavStylingIos: (
            state: INavigation,
            action: PayloadAction<INavigation["sidebarNavigationBar"]["styling"]["ios"]>
        ) => {
            state.sidebarNavigationBar.styling.ios = action.payload;
        },
        updateSideNavStylingAndroid: (
            state: INavigation,
            action: PayloadAction<INavigation["sidebarNavigationBar"]["styling"]["android"]>
        ) => {
            state.sidebarNavigationBar.styling.android = action.payload;
        },

        updateSideNavSidebarItemsMenus: (
            state: INavigation,
            action: PayloadAction<INavigation["sidebarNavigationBar"]["sidebarItems"]["menus"]>
        ) => {
            state.sidebarNavigationBar.sidebarItems.menus = action.payload;
        },

        updateBottomBarActive: (
            state: INavigation,
            action: PayloadAction<INavigation["bottomTabBar"]["active"]>
        ) => {
            state.bottomTabBar.active = action.payload;
        },

        updateBottomBarStylingIos: (
            state: INavigation,
            action: PayloadAction<INavigation["bottomTabBar"]["styling"]["ios"]>
        ) => {
            state.bottomTabBar.styling.ios = action.payload;
        },

        updateBottomBarStylingAndroid: (
            state: INavigation,
            action: PayloadAction<INavigation["bottomTabBar"]["styling"]["android"]>
        ) => {
            state.bottomTabBar.styling.android = action.payload;
        },

        updateContextual: (state: INavigation, action: PayloadAction<IContextualNavToolbar>) => {
            const updatedContextual = { ...state.contextual_nav_toolbar, ...action.payload };
            state.contextual_nav_toolbar = updatedContextual;
        },

        updateContextualEnable: (state: INavigation, action: PayloadAction<string>) => {
            state.contextual_nav_toolbar.enable = action.payload;
        },

        updateContextualToolBarVisibility: (state: INavigation, action: PayloadAction<string>) => {
            state.contextual_nav_toolbar.toolbar_visibility_by_pages = action.payload;
        },

        updateContextualBackBtnLabel: (state: INavigation, action: PayloadAction<string>) => {
            state.contextual_nav_toolbar.back_button_configuration.label = action.payload;
        },

        updateContextualPagesToActiveBtn: (state: INavigation, action: PayloadAction<string>) => {
            state.contextual_nav_toolbar.back_button_configuration.pages_to_activate_button =
                action.payload;
        },

        updateContextualRefreshBtn: (state: INavigation, action: PayloadAction<boolean>) => {
            state.contextual_nav_toolbar.refresh_button_configuration = action.payload;
        },
        updateContextualForwardBtn: (state: INavigation, action: PayloadAction<boolean>) => {
            state.contextual_nav_toolbar.forward_button_configuration = action.payload;
        },
    },
});

export const {
    updateNavigation,
    updateTopNavigateDisplayMode,
    updateTopNavigatePagesToDisplay,
    updateContextual,
    updateContextualEnable,
    updateContextualToolBarVisibility,
    updateContextualForwardBtn,
    updateContextualBackBtnLabel,
    updateContextualPagesToActiveBtn,
    updateContextualRefreshBtn,
    updateBottomBarActive,
    updateBottomBarStylingAndroid,
    updateBottomBarStylingIos,
    updateSideNavActive,
    updateSideNavSidebarItemsMenus,
    updateSideNavStylingAndroid,
    updateSideNavStylingIos,
    updateTopNavEnableAndroid,
    updateTopNavEnableIos,
    updateTopNavStylingAndroid,
    updateTopNavStylingIos,
} = navigation.actions;

export default navigation.reducer;

export { initialState as defaultNavigationState };

// const n = {
// "navigation": {
//         "topNavigationBar": {
//             "enable": {
//                 "ios": {
//                     "active": true
//                 },
//                 "android": {
//                     "active": true
//                 }
//             },
//             "styling": {
//                 "ios": {
//                     "defaultDisplay": "text",
//                     "imageType": "appIcon",
//                     "newImage": "assets/defaults/app-icon-placeholder.png",
//                     "newImageDark": "assets/defaults/app-icon-placeholder.png",
//                     "textColor": "#333333",
//                     "textColorDark": "#adc5dc",
//                     "tintColor": "#f8f8f8",
//                     "tintColorDark": "#333333"
//                 },
//                 "android": {
//                     "backgroundColor": "#FFFFFF",
//                     "backgroundColorDark": "#333333",
//                     "defaultDisplay": "text",
//                     "imageType": "appIcon",
//                     "newImage": "assets/defaults/app-icon-placeholder.png",
//                     "newImageDark": "assets/defaults/app-icon-placeholder.png",
//                     "textColor": "#1A100B",
//                     "textColorDark": "#FFFFFF"
//                 }
//             },
//             "customIcons": {
//                 "actions": [
//                     {
//                         "id": "2",
//                         "items": [
//                             {
//                                 "icon": "fas fa-rotate-right",
//                                 "label": "Refresh",
//                                 "system": "refresh",
//                                 "url": ""
//                             },
//                             {
//                                 "icon": "fas fa-share-square",
//                                 "label": "Share",
//                                 "system": "share",
//                                 "url": ""
//                             },
//                             {
//                                 "icon": "fas fa-magnifying-glass",
//                                 "label": "GSearch",
//                                 "system": "url",
//                                 "url": "https://google.com"
//                             }
//                         ]
//                     }
//                 ],
//                 "available": [
//                     {
//                         "icon": "fas fa-rotate-right",
//                         "label": "",
//                         "system": "refresh",
//                         "url": "",
//                         "name": "Refresh"
//                     },
//                     {
//                         "icon": "fas fa-share-square",
//                         "label": "Share",
//                         "system": "share",
//                         "url": "",
//                         "name": "Share"
//                     },
//                     {
//                         "icon": "fas fa-magnifying-glass",
//                         "label": "GSearch",
//                         "system": "url",
//                         "url": "https://google.com",
//                         "name": "url"
//                     }
//                 ],
//                 "actionSelection": [],
//                 "active": true
//             }
//         },
//         "sidebarNavigationBar": {
//             "active": false,
//             "styling": {
//                 "ios": {
//                     "backgroundColor": "#f8f8f8",
//                     "backgroundColorDark": "#333333",
//                     "sidebarFont": "Default",
//                     "sidebarImage": "https://s3.amazonaws.com/gonativeio/images_generated/pkt29zhnu29u0_1694683672242.png",
//                     "sidebarImageDark": "https://s3.amazonaws.com/gonativeio/images_generated/pkt29zhnu29u0_1694683672242.png",
//                     "textColor": "#333333",
//                     "textColorDark": "#adc5dc",
//                     "type": "appIcon"
//                 },
//                 "android": {
//                     "showAppName": true,
//                     "showLogo": true,
//                     "backgroundColor": "#FFFFFF",
//                     "backgroundColorDark": "#333333",
//                     "foregroundColor": "#1A100B",
//                     "foregroundColorDark": "#FFFFFF",
//                     "separatorColor": "#CCCCCC",
//                     "separatorColorDark": "#666666",
//                     "highlightColor": "#1A100B",
//                     "highlightColorDark": "#FFFFFF"
//                 }
//             },
//             "items": [
//                 {
//                     "url": "https://webhosting.5starcompany.com.ng/index.php",
//                     "label": "",
//                     "subLinks": [],
//                     "icon": ""
//                 },
//                 {
//                     "url": "https://webhosting.5starcompany.com.ng/#",
//                     "label": "Store",
//                     "subLinks": [],
//                     "icon": "fas fa-store"
//                 },
//                 {
//                     "url": "https://webhosting.5starcompany.com.ng/cart.php",
//                     "label": "Browse all",
//                     "subLinks": [],
//                     "icon": "fas fa-store"
//                 }
//             ]
//         },
//         "bottomTabBar": {
//             "active": false,
//             "styling": {
//                 "android": {
//                     "backgroundColor": "#FFFFFF",
//                     "backgroundColorDark": "#333333",
//                     "textColor": "#949494",
//                     "textColorDark": "#FFFFFF",
//                     "indicatorColor": "#1A100B",
//                     "indicatorColorDark": "#666666"
//                 },
//                 "ios": {
//                     "tintColor": "#f8f8f8",
//                     "tintColorDark": "#333333",
//                     "inactiveColor": "#A1A1A1",
//                     "inactiveColorDark": "#818181"
//                 }
//             },
//             "tabMenus": [
//                 {
//                     "items": [
//                         {
//                             "icon": "fas fa-home",
//                             "inactiveIcon": "far fa-home",
//                             "label": "Home",
//                             "url": "https://webhosting.5starcompany.com.ng/"
//                         },
//                         {
//                             "label": "News",
//                             "icon": "fas fa-newspaper",
//                             "inactiveIcon": "far fa-newspaper",
//                             "url": "https://webhosting.5starcompany.com.ng/news"
//                         },
//                         {
//                             "label": "Directory",
//                             "icon": "fas fa-address-book",
//                             "inactiveIcon": "far fa-address-book",
//                             "url": "https://webhosting.5starcompany.com.ng/directory"
//                         },
//                         {
//                             "icon": "fas fa-anchor-circle-check",
//                             "label": "Sammy",
//                             "system": "javascript",
//                             "url": "javascript:"
//                         }
//                     ],
//                     "availableIcons":[
//                         "fas fa-align-justify",
//                         "fas fa-align-left",
//                         "fas fa-anchor-circle-xmark",
//                         "fas fa-angle-right",
//                         "fas fa-ankh",
//                         "fas fa-arrow-up-long",
//                         "fas fa-asterisk",
//                         "fas fa-hourglass",
//                         "fas fa-house-lock",
//                         "fas fa-home",
//                         "fas fa-newspaper"
//                     ]
//                 }
//             ]
//         }
//     },

// }
