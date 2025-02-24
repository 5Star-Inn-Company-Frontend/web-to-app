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
        dark_mode: "enable",
        screen_orientation: "auto rotate",
        pull_to_refresh: true,
        swipe_gesture: true,
        pitch_to_zoom: false,
        accessibility: true,
        front_scaling: true,
        maximum_window: false,
        view_port_width: true,
        localization: ["Arabic", "Chinese", "English"],
    },
    website_override: {
        user_agent: "5starcom",
        custom_css: [],
        cookie_persistence: "default",
        custom_javascript: [],
    },
    permission: {
        javascript_bridge: [],
        app_tracking_transparency: false,
        location_service: true,
        media: true,
        downloads_directory: "files saved private to app",
        background_audio: true,
        permission: [],
    },
    navigation: {
        display_mode: "auto",
        styling: [],
        navigation_bar: [],
    },
    notification: {
        signal: true,
        legacy_mode: false,
        app_id: "ikwwiniwe",
        automatic_registration: true,
        automatic_data_transmission: false,
        foreground_notification: true,
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

        setAppData: (state: IEditApp, action: PayloadAction<IEditApp>) => {
            return { ...state, ...action.payload };
        },
        updateAppData: (state: IEditApp, action: PayloadAction<IEditApp>) => {
            return { ...state, ...action.payload };
        },
        updateInterface: (state: IEditApp, action: PayloadAction<Partial<IEditApp["interface"]>>) => {
            return { ...state, interface: { ...state.interface, ...action.payload } };
        },
    },
});

export const { setAppData, updateAppData, resetAppState, updateInterface } = appSlice.actions;
export default appSlice.reducer;
