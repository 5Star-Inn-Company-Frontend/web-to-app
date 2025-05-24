import React from "react";
import { IBuildSettings } from "./build-settings";

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

export interface ILinkHandlingItem {
    id?: number;
    mode: string;
    label: string;
    pagesToTrigger?: string;
    regex: string;
}

export interface ILinkHandling {
    internalVsExternalLinks: {
        active: boolean;
        items: ILinkHandlingItem[];
        itemsDefault: ILinkHandlingItem[];
    };
    universalLinks: string[];
    enableAndroidApplinks: boolean;
    androidApplinksCertHash: string;
    urlSchemeProtocol: string;
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
        ios: boolean;
        android: boolean;
    };
    accessibility: boolean;
    front_scaling: boolean;
    maximum_window: boolean;
    view_port_width: boolean;
    localization: string[];
}

export interface IWebsiteOveride {
    customUserAgent: {
        ios: string;
        android: string;
    };
    css: {
        android: string;
        ios: string;
    };
    script: {
        ios: string;
        android: string;
    };
}

export interface IColorScheme {
    background_color: string;
    text_color: string;
}

export interface IColorSchemeMode {
    light_mode: IColorScheme;
    dark_mode: IColorScheme;
}

export interface ITopNavStyling {
    ios: {
        defaultDisplay: string;
        imageType: string;
        newImage: string;
        newImageDark: string;
        textColor: string;
        textColorDark: string;
        tintColor: string;
        tintColorDark: string;
    };
    android: {
        backgroundColor: string;
        backgroundColorDark: string;
        defaultDisplay: string;
        imageType: string;
        newImage: string;
        newImageDark: string;
        textColor: string;
        textColorDark: string;
    };
}

export interface ITopNavBarVisualEditor {
    pages_to_display_top_nav_bar: string;
    display_mode: string;
}

export interface ITopNavBar {
    enable: {
        ios: {
            active: boolean;
        };
        android: {
            active: boolean;
        };
    };
    styling: ITopNavStyling;
    top_navigate_bar_visual_editor: ITopNavBarVisualEditor;
    autoNewWindows: {
        active: boolean;
        items: [[]];
    };
    dynamicTitles: {
        active: boolean;
        items: [];
    };
    customIcons: {
        actions: [];
        actionSelection: [];
        active: boolean;
    };
    refreshButton: {
        ios: {
            active: boolean;
        };
        android: {
            active: boolean;
        };
    };
}

export interface ISidbarNavStyling {
    ios: {
        backgroundColor: string;
        backgroundColorDark: string;
        sidebarFont: string;
        sidebarImage: string;
        sidebarImageDark: string;
        textColor: string;
        textColorDark: string;
        type: string;
    };
    android: {
        showAppName: boolean;
        showLogo: boolean;
        backgroundColor: string;
        backgroundColorDark: string;
        foregroundColor: string;
        foregroundColorDark: string;
        separatorColor: string;
        separatorColorDark: string;
        highlightColor: string;
        highlightColorDark: string;
    };
}

export interface ISideBarNavigation {
    active: boolean;
    styling: ISidbarNavStyling;
    sidebarItems: {
        menuSelectionConfig: {
            redirectLocations: [
                {
                    regex: ".*";
                    menuName: "default";
                    loggedIn: true;
                }
            ];
        };
        menus: [
            {
                active: false;
                items: {
                    url: string;
                    label: string;
                    subLinks: [];
                }[];
                name: string;
            }
        ];
    };
}

export interface IBgColorScheme {
    light_mode: string;
    dark_mode: string;
}
export interface IBottomTabBar {
    active: boolean;
    styling: {
        android: {
            backgroundColor: string;
            backgroundColorDark: string;
            textColor: string;
            textColorDark: string;
            indicatorColor: string;
            indicatorColorDark: string;
        };
        ios: {
            tintColor: string;
            tintColorDark: string;
            inactiveColor: string;
            inactiveColorDark: string;
        };
    };
    bottomTabBarItems: {
        active: boolean;
        tabMenus: string[];
        tabSelectionConfig: string[];
    };
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
    topNavigationBar: ITopNavBar;
    sidebarNavigationBar: ISideBarNavigation;
    bottomTabBar: IBottomTabBar;
    contextual_nav_toolbar: IContextualNavToolbar;
}

export interface IMedia {
    camera: boolean;
    microphone: boolean;
}
export interface IPermission {
    javascript_bridge: string[];
    appTrackingTransparency: {
        ios: boolean;
    };
    locationServices: {
        android: boolean;
    };
    webRtc: {
        android: {
            cameraActive: boolean;
            microphoneActive: boolean;
        };
    };
    downloadsDirectory: {
        android: string;
    };
    backgroundAudio: {
        ios: boolean;
    };
    camera: {
        ios: {
            description: string;
        };
    };
    microphone: {
        ios: {
            description: string;
        };
    };
    location: {
        ios: {
            description: string;
        };
    };
}

export interface INotification {
    oneSignal: {
        active: boolean;
        autoRegister: boolean;
        requiresUserPrivacyConsent: boolean;
        showForegroundNotifications: boolean;
        applicationId: string;
    };
    notification_icon: {
        android: string;
    };
    notification_sound: [];
}

export interface IPlugin {
    id: string;
    name: string;
    amount: string;
    isActive: boolean;
    docLink: string;
}

export interface IPluginProps {
    img: string;
    name: string;
    amount: string;
    isActive: boolean;
    docLink: string;
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
    build_setting: IBuildSettings | null;
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
    plugin: IPlugin[];
    build_setting: IBuildSettings;
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
