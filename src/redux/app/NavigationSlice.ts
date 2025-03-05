import {
    IBackButtonConfig,
    IBottomTabBar,
    IContextualNavToolbar,
    INavigation,
    ISidbarNavStyling,
    ISideBarNavigation,
    ITopNavBar,
    ITopNavBarVisualEditor,
    ITopNavStyling,
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

        updateTopNavStyling: (state: INavigation, action: PayloadAction<ITopNavStyling>) => {
            const updateTopNavStyle = { ...state.top_nav_bar.styling, ...action.payload };
            state.top_nav_bar.styling = updateTopNavStyle;
        },

        updateTopNavigate: (state: INavigation, action: PayloadAction<ITopNavBarVisualEditor>) => {
            const updatedTopNavigate = {
                ...state.top_nav_bar.top_navigate_bar_visual_editor,
                ...action.payload,
            };
            state.top_nav_bar.top_navigate_bar_visual_editor = updatedTopNavigate;
        },

        updateSideNav: (state: INavigation, action: PayloadAction<ISideBarNavigation>) => {
            const updatedSideNav = { ...state.sidebar_navigation, ...action.payload };
            state.sidebar_navigation = updatedSideNav;
        },

        updateSideNavStyling: (state: INavigation, action: PayloadAction<ISidbarNavStyling>) => {
            const updatedNavStyling = { ...state.sidebar_navigation.styling, ...action.payload };
            state.sidebar_navigation.styling = updatedNavStyling;
        },

        updateBottomBar: (state: INavigation, action: PayloadAction<IBottomTabBar>) => {
            const updatedBottomBar = { ...state.bottom_tab_bar, ...action.payload };
            state.bottom_tab_bar = updatedBottomBar;
        },

        updateBottomBarStyling: (state: INavigation, action: PayloadAction<IBottomTabBar>) => {
            const updatedBottomBarStyling = { ...state.bottom_tab_bar.styling, ...action.payload };
            state.bottom_tab_bar.styling = updatedBottomBarStyling;
        },

        updateContextual: (state: INavigation, action: PayloadAction<IContextualNavToolbar>) => {
            const updatedContextual = { ...state.contextual_nav_toolbar, ...action.payload };
            state.contextual_nav_toolbar = updatedContextual;
        },

        updateContextualBackBtn: (state: INavigation, action: PayloadAction<IBackButtonConfig>) => {
            const updatedBackBtn = {
                ...state.contextual_nav_toolbar.back_button_configuration,
                ...action.payload,
            };

            state.contextual_nav_toolbar.back_button_configuration = updatedBackBtn;
        },
    },
});

export const {
    updateNavigation,
    updateSideNav,
    updateSideNavStyling,
    updateTopNav,
    updateTopNavStyling,
    updateTopNavigate,
} = navigation.actions;

export default navigation.reducer;

export { initialState as defaultNavigationState };
