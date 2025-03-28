import { IEditApp } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IEditApp = {
    id: null,
    name: "",
    url: "",
    description: "",
    plan: "",
    branding: {
        app_icon: "",
        splash_screen: "enable",
        theme_color: "#FF5733",
        status_bar: "overlay",
    },
    link_handling: {
        link_behaviour: true,
        new_window: "permitted",
        universal_link: "domain",
        url_scheme: "https",
    },
    interface: {
        screen_on: true,
        full_screen: false,
        dark_mode: "auto",
        screen_orientation: "auto rotate",
        pull_to_refresh: true,
        swipe_gesture: true,
        pitch_to_zoom: false,
        accessibility: true,
        front_scaling: true,
        maximum_window: false,
        view_port_width: true,
        localization: ["English"],
    },
    website_overide: {
        user_agent: "enable",
        custom_css: [],
        cookie_persistence: "default",
        custom_javascript: [],
    },
    permission: {
        javascript_bridge: [],
        app_tracking_transparency: false,
        location_service: true,
        media: { camera: true, microphone: false },
        downloads_directory: "files saved private to app",
        background_audio: true,
        permission: [],
    },
    navigation: {
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
    },
    notification: {
        signal: true,
        legacy_mode: false,
        app_id: "ikwwiniwe",
        automatic_registration: true,
        automatic_data_transmission: "automatic",
        foreground_notification: "show",
        android_notifications_icon: null,
        notification_sound: [],
    },
    plugin: {
        social_login: false,
    },
    build_setting: {
        google_service: [],
        development_tools: true,
        app_config: [],
    },
    last_saved: "",
    member_count: 0,
};

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        resetAppState: () => initialState,

        setAppData: (state, action: PayloadAction<Partial<IEditApp>>) => {
            // Merge top-level properties
            const newState = { ...state, ...action.payload };

            // Only spread nested objects if they are not null/undefined
            newState.branding =
                action.payload.branding != null
                    ? { ...state.branding, ...action.payload.branding }
                    : state.branding;
            newState.link_handling =
                action.payload.link_handling != null
                    ? { ...state.link_handling, ...action.payload.link_handling }
                    : state.link_handling;
            newState.interface =
                action.payload.interface != null
                    ? { ...state.interface, ...action.payload.interface }
                    : state.interface;
            newState.website_overide =
                action.payload.website_overide !== null
                    ? { ...state.website_overide, ...action.payload.website_overide }
                    : initialState.website_overide;
            newState.permission =
                action.payload.permission != null
                    ? { ...state.permission, ...action.payload.permission }
                    : state.permission;
            newState.navigation =
                action.payload.navigation != null
                    ? { ...state.navigation, ...action.payload.navigation }
                    : state.navigation;
            newState.notification =
                action.payload.notification != null
                    ? { ...state.notification, ...action.payload.notification }
                    : state.notification;
            newState.plugin =
                action.payload.plugin != null
                    ? { ...state.plugin, ...action.payload.plugin }
                    : state.plugin;
            newState.build_setting =
                action.payload.build_setting != null
                    ? { ...state.build_setting, ...action.payload.build_setting }
                    : state.build_setting;

            return newState;
        },
        updateAppData: (state: IEditApp, action: PayloadAction<IEditApp>) => {
            return { ...state, ...action.payload };
        },
        updateName: (state: IEditApp, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        updateUrl: (state: IEditApp, action: PayloadAction<string>) => {
            state.url = action.payload;
        },
        updateDescription: (state: IEditApp, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.description = action.payload;
        },
        updatePlan: (state: IEditApp, action: PayloadAction<string>) => {
            state.plan = action.payload;
        },

        updateInterface: (
            state: IEditApp,
            action: PayloadAction<Partial<IEditApp["interface"]>>
        ) => {
            return { ...state, interface: { ...state.interface, ...action.payload } };
        },

        updateBranding: (state: IEditApp, action: PayloadAction<Partial<IEditApp["branding"]>>) => {
            return { ...state, branding: { ...state.branding, ...action.payload } };
        },
        updateWebsiteOverrides: (
            state: IEditApp,
            action: PayloadAction<Partial<IEditApp["website_overide"]>>
        ) => {
            return { ...state, website_override: { ...state.website_overide, ...action.payload } };
        },
        updatePermission: (
            state: IEditApp,
            action: PayloadAction<Partial<IEditApp["permission"]>>
        ) => {
            return { ...state, permission: { ...state.permission, ...action.payload } };
        },

        updateNotification: (
            state: IEditApp,
            action: PayloadAction<Partial<IEditApp["notification"]>>
        ) => {
            return { ...state, notification: { ...state.notification, ...action.payload } };
        },

        updateNavigation: (
            state: IEditApp,
            action: PayloadAction<Partial<IEditApp["navigation"]>>
        ) => {
            return { ...state, navigation: { ...state.navigation, ...action.payload } };
        },

        updateNavigationSideBarTab: (
            state: IEditApp,
            action: PayloadAction<Partial<IEditApp["navigation"]["sidebar_navigation"]>>
        ) => {
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    sidebar_navigation: {
                        ...state.navigation.sidebar_navigation,
                        ...action.payload,
                    },
                },
            };
        },
        updateNavigationTopBarTab: (
            state: IEditApp,
            action: PayloadAction<Partial<IEditApp["navigation"]["top_nav_bar"]>>
        ) => {
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    top_nav_bar: { ...state.navigation.top_nav_bar, ...action.payload },
                },
            };
        },
    },
});

export const {
    setAppData,
    updateAppData,
    resetAppState,
    updateInterface,
    updateBranding,
    updateName,
    updateUrl,
    updatePlan,
    updateDescription,
    updateWebsiteOverrides,
    updatePermission,
    updateNotification,
    updateNavigation,
    updateNavigationSideBarTab,
    updateNavigationTopBarTab,
} = appSlice.actions;
export default appSlice.reducer;
