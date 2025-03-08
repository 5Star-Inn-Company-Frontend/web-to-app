import {
    IBottomTabBar,
    IColorScheme,
    IContextualNavToolbar,
    INavigation,
    ISideBarNavigation,
    ITopNavBar,
} from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: INavigation = {
    top_nav_bar: {
        display_mode: "auto",
        styling: {
            default_display: "text",
            light_mode: {
                background_color: "#ffffff",
                text_color: "#000000",
            },
            dark_mode: {
                background_color: "#000000",
                text_color: "#ffffff",
            },
        },
        top_navigate_bar_visual_editor: {
            pages_to_display_top_nav_bar: "multiple pages",
            display_mode: "page title",
        },
    },
    sidebar_navigation: {
        enable: true,
        styling: {
            image: "text",
            sidebar_font: "light",
            light_mode: {
                background_color: "#ffffff",
                text_color: "#000000",
            },
            dark_mode: {
                background_color: "#000000",
                text_color: "#ffffff",
            },
        },
    },
    bottom_tab_bar: {
        default_mode: "hidden",
        styling: {
            light_mode: "#ffffff",
            dark_mode: "#000000",
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

        updateTopNav: (state: INavigation, action: PayloadAction<ITopNavBar>) => {
            const updatedTopNav = { ...state.top_nav_bar, ...action.payload };
            state.top_nav_bar = updatedTopNav;
        },

        updateDisplayMode: (state: INavigation, action: PayloadAction<"auto" | "always">) => {
            state.top_nav_bar.display_mode = action.payload;
        },

        updateDefaultDisplay: (state: INavigation, action: PayloadAction<"text" | "image">) => {
            state.top_nav_bar.styling.default_display = action.payload;
        },

        updateTopNavLightMode: (state: INavigation, action: PayloadAction<IColorScheme>) => {
            state.top_nav_bar.styling.light_mode = action.payload;
        },
        updateTopNavDarkMode: (state: INavigation, action: PayloadAction<IColorScheme>) => {
            state.top_nav_bar.styling.dark_mode = action.payload;
        },

        updateTopNavigatePagesToDisplay: (state: INavigation, action: PayloadAction<string>) => {
            state.top_nav_bar.top_navigate_bar_visual_editor.pages_to_display_top_nav_bar =
                action.payload;
        },

        updateTopNavigateDisplayMode: (state: INavigation, action: PayloadAction<string>) => {
            state.top_nav_bar.top_navigate_bar_visual_editor.display_mode = action.payload;
        },

        updateSideNav: (state: INavigation, action: PayloadAction<ISideBarNavigation>) => {
            const updatedSideNav = { ...state.sidebar_navigation, ...action.payload };
            state.sidebar_navigation = updatedSideNav;
        },

        updateSideNavEnable: (state: INavigation, action: PayloadAction<boolean>) => {
            state.sidebar_navigation.enable = action.payload;
        },

        updateSideNavImage: (state: INavigation, action: PayloadAction<string>) => {
            state.sidebar_navigation.styling.image = action.payload;
        },

        updateSideNavFont: (state: INavigation, action: PayloadAction<string>) => {
            state.sidebar_navigation.styling.sidebar_font = action.payload;
        },

        updateSideNavLightMode: (state: INavigation, action: PayloadAction<IColorScheme>) => {
            state.sidebar_navigation.styling.light_mode = action.payload;
        },
        updateSideNavDarkMode: (state: INavigation, action: PayloadAction<IColorScheme>) => {
            state.sidebar_navigation.styling.dark_mode = action.payload;
        },

        updateBottomBar: (state: INavigation, action: PayloadAction<IBottomTabBar>) => {
            const updatedBottomBar = { ...state.bottom_tab_bar, ...action.payload };
            state.bottom_tab_bar = updatedBottomBar;
        },

        updateBottomBarDefaultMode: (
            state: INavigation,
            action: PayloadAction<"hidden" | "active">
        ) => {
            state.bottom_tab_bar.default_mode = action.payload;
        },

        updateBottomBarStylingLight: (state: INavigation, action: PayloadAction<string>) => {
            state.bottom_tab_bar.styling.light_mode = action.payload;
        },
        updateBottomBarStylingDark: (state: INavigation, action: PayloadAction<string>) => {
            state.bottom_tab_bar.styling.dark_mode = action.payload;
        },

        updateBottomBarStyling: (state: INavigation, action: PayloadAction<IBottomTabBar>) => {
            const updatedBottomBarStyling = { ...state.bottom_tab_bar.styling, ...action.payload };
            state.bottom_tab_bar.styling = updatedBottomBarStyling;
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
    updateSideNav,
    updateTopNav,
    updateDisplayMode,
    updateDefaultDisplay,
    updateTopNavDarkMode,
    updateTopNavLightMode,
    updateTopNavigateDisplayMode,
    updateTopNavigatePagesToDisplay,
    updateSideNavEnable,
    updateSideNavFont,
    updateSideNavImage,
    updateSideNavDarkMode,
    updateSideNavLightMode,
    updateBottomBar,
    updateBottomBarStylingLight,
    updateBottomBarStylingDark,
    updateBottomBarDefaultMode,
    updateBottomBarStyling,
    updateContextual,
    updateContextualEnable,
    updateContextualToolBarVisibility,
    updateContextualForwardBtn,
    updateContextualBackBtnLabel,
    updateContextualPagesToActiveBtn,
    updateContextualRefreshBtn,
} = navigation.actions;

export default navigation.reducer;

export { initialState as defaultNavigationState };
