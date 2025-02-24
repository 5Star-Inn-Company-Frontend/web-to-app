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
    splash_screen: string;
    theme_color: string;
    status_bar: string;
}

export interface ILinkHandling {
    link_behaviour: boolean;
    new_window: string;
    universal_link: string;
    url_scheme: string;
}
export interface IInterface {
    screen_on: boolean;
    full_screen: boolean;
    dark_mode: string;
    screen_orientation: string;
    pull_to_refresh: boolean;
    swipe_gesture: boolean;
    pitch_to_zoom: boolean;
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
export interface INavigation {
    display_mode: string;
    styling: string[];
    navigation_bar: string[];
}
export interface IPermission {
    javascript_bridge: string[];
    app_tracking_transparency: boolean;
    location_service: boolean;
    media: boolean;
    downloads_directory: string;
    background_audio: boolean;
    permission: string[];
}

interface INotification {
    signal: boolean;
    legacy_mode: boolean;
    app_id: string;
    automatic_registration: boolean;
    automatic_data_transmission: boolean;
    foreground_notification: boolean;
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
    website_override: IWebsiteOveride | null;
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
    branding: IBranding;
    link_handling: ILinkHandling;
    interface: IInterface;
    website_override: IWebsiteOveride;
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
