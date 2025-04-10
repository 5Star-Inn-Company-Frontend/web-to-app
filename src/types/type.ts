import React from "react";

export interface AuthState {
    user: User | null;
    token: string | null;
}

export interface LoginResponse {
    status: string;
    message: string;
    data: User;
    token: string;
}

export interface User {
    name: string;
    email: string;
    email_Verified_at: string | null;
    created_at: string;
    updated_at: string;
    id: number;
    role_id: number;
    user_id: number | null;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface CreateAppRequest {
    name: string;
    url: string;
}

export interface IBranding {
    app_icon: string;
    icons: {
        ios: string;
        android: string;
    };
    splashScreen: {
        ios: {
            launchImages: string;
            launchImagesDark: string;
            showSplash: boolean;
            backgroundColor: string;
            backgroundColorDark: string;
        };
        android: {
            launchImages: string;
            launchImagesDark: string;
            showSplash: boolean;
            backgroundColor: string;
            backgroundColorDark: string;
        };
    };
    themeColors: {
        ios: {
            primaryColor: string;
            primaryColorDark: string;
        };
        android: {
            primaryColor: string;
            primaryColorDark: string;
        };
    };
    statusBar: {
        ios: {
            style: string;
            overlay: boolean;
            blur: boolean;
            backgroundColor: string;
            backgroundColorDark: string;
        };
        android: {
            style: string;
            overlay: boolean;
            blur: boolean;
            backgroundColor: string;
            backgroundColorDark: string;
        };
    };
}

export interface ILinkHandling {
    link_behaviour: boolean;
    new_window: string;
    universal_link: string;
    url_scheme: string;
}
export interface IInterface {
    keepScreenOn: boolean;
    fullScreen: {
        ios: boolean;
        android: boolean;
    };
    darkMode: {
        ios: string;
        android: string;
    };
    screenOrientation: {
        iphone: string;
        ipad: string;
        androidPhone: string;
        androidTablet: string;
    };
    nativePageTransitions: {
        active: boolean;
        alpha: 0.5;
    };
    spinner: {
        android: {
            color: string;
            colorDark: string;
        };
        ios: {
            color: string;
            colorDark: string;
        };
    };
    pullToRefresh: {
        ios: {
            active: boolean;
        };
        android: {
            active: boolean;
            iconColor: string;
            iconColorDark: string;
        };
    };
    swipeGestures: {
        value: boolean;
        android: {
            backgroundColor: string;
            backgroundColorDark: string;
            activeColor: string;
            activeColorDark: string;
            inactiveColor: string;
            inactiveColorDark: string;
        };
    };
    pinchToZoom: {
        ios: false;
        android: true;
    };
    accessibility: boolean;
    front_scaling: boolean;
    maximum_window: boolean;
    view_port_width: boolean;
    localization: string[];
}

export interface IWebsiteOveride {
    user_agent: string;
    custom_css: string[];
    cookie_persistence: string;
    custom_javascript: string[];
}

export interface IColorScheme {
    background_color: string;
    text_color: string;
}

export interface IColorSchemeMode {
    light_mode: IColorScheme;
    dark_mode: IColorScheme;
}

export interface ITopNavStyling extends IColorSchemeMode {
    default_display: string;
}

export interface ITopNavBarVisualEditor {
    pages_to_display_top_nav_bar: string;
    display_mode: string;
}

export interface ITopNavBar {
    display_mode: string;
    styling: ITopNavStyling;
    top_navigate_bar_visual_editor: ITopNavBarVisualEditor;
}

export interface ISidbarNavStyling extends IColorSchemeMode {
    image: string;
    sidebar_font: string;
}

export interface ISideBarNavigation {
    enable: boolean;
    styling: ISidbarNavStyling;
}

export interface IBgColorScheme {
    light_mode: string;
    dark_mode: string;
}
export interface IBottomTabBar {
    default_mode: "hidden" | "active";
    styling: IBgColorScheme;
}

export interface IBackButtonConfig {
    label: string;
    pages_to_activate_button: string;
}
export interface IContextualNavToolbar {
    enable: string;
    toolbar_visibility_by_pages: string;
    back_button_configuration: IBackButtonConfig;
    refresh_button_configuration: boolean;
    forward_button_configuration: boolean;
}
export interface INavigation {
    top_nav_bar: ITopNavBar;
    sidebar_navigation: ISideBarNavigation;
    bottom_tab_bar: IBottomTabBar;
    contextual_nav_toolbar: IContextualNavToolbar;
}

export interface IMedia {
    camera: boolean;
    microphone: boolean;
}
export interface IPermission {
    javascript_bridge: string[];
    app_tracking_transparency: boolean;
    location_service: boolean;
    media: IMedia;
    downloads_directory: string;
    background_audio: boolean;
    permission: string[];
}

export interface INotification {
    signal: boolean;
    legacy_mode: boolean;
    app_id: string;
    automatic_registration: boolean;
    automatic_data_transmission: string;
    foreground_notification: string;
    android_notifications_icon: null;
    notification_sound: string[];
}

interface IPlugin {
    social_login: boolean;
}

interface IBuildSetting {
    google_service: string[];
    development_tools: boolean;
    app_config: string[];
}

export interface IAppData {
    id: number | null;
    url: string;
    name: string;
    description: string;
    plan: string;
    branding: IBranding | null;
    link_handling: ILinkHandling | null;
    interface: IInterface | null;
    website_overide: IWebsiteOveride | null;
    permission: IPermission | null;
    navigation: INavigation | null;
    notification: INotification | null;
    plugin: IPlugin | null;
    build_setting: IBuildSetting | null;
    last_saved: string;
    member_count: number;
}

export interface IEditApp {
    id: number | null;
    url: string;
    name: string;
    description: string;
    plan: string;
    private_link: string;
    public_link: string;
    branding: IBranding;
    link_handling: ILinkHandling;
    interface: IInterface;
    website_overide: IWebsiteOveride;
    permission: IPermission;
    navigation: INavigation;
    notification: INotification;
    plugin: IPlugin;
    build_setting: IBuildSetting;
    last_saved: string;
    member_count: number;
}

export interface IEditAppResponse {
    data: IEditApp;
}

export interface IAppResponse {
    data: IAppData[];
}

export interface IAppDataResponse {
    data: IAppData;
}

export interface IRole {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}
export interface IUser {
    id: number;
    name: string;
    email: string;
    role: IRole;
}

export interface IMember {
    data: IUser[];
}

export interface ITabConfig {
    value: string;
    component: React.ComponentType;
}

export interface IAppState {
    id: number | null;
    name: string;
    url: string;
    description: string;
    plan: string;
    last_saved: string;
    member_count: number;
    private_link: string;
    public_link: string;
}

// "interface": {
//             "keepScreenOn": true,
//             "fullScreen": {
//                 "ios": true,
//                 "android": true
//             },
//             "darkMode": {
//                 "ios": "dark",
//                 "android": "auto"
//             },
//             "screenOrientation": {
//                 "iphone": "auto",
//                 "ipad": "auto",
//                 "androidPhone": "auto",
//                 "androidTablet": "auto"
//             },
//             "nativePageTransitions": {
//                 "active": true,
//                 "alpha": 0.5
//             },
//             "spinner": {
//                 "android": {
//                     "color": "#808080",
//                     "colorDark": "#808080"
//                 },
//                 "ios": {
//                     "color": "#808080",
//                     "colorDark": "#808080"
//                 }
//             },
//             "pullToRefresh": {
//                 "ios": {
//                     "active": true
//                 },
//                 "android": {
//                     "active": false,
//                     "iconColor": "#1A100B",
//                     "iconColorDark": "#FFFFFF"
//                 }
//             },
//             "swipeGestures": {
//                 "value": true,
//                 "android": {
//                     "backgroundColor": "#FFFFFF",
//                     "backgroundColorDark": "#333333",
//                     "activeColor": "#000000",
//                     "activeColorDark": "#FFFFFF",
//                     "inactiveColor": "#666666",
//                     "inactiveColorDark": "#666666"
//                 }
//             },
//             "pinchToZoom": {
//                 "ios": false,
//                 "android": true
//             }
//         },
