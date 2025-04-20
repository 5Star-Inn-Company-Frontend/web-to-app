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

// {

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
//             "sidebarItems": {
//                 "menuSelectionConfig": {
//                     "redirectLocations": [
//                         {
//                             "regex": ".*",
//                             "menuName": "default",
//                             "loggedIn": true
//                         }
//                     ]
//                 },
//                 "menus": [
//                     {
//                         "active": false,
//                         "items": [
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/index.php",
//                                 "label": "",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/#",
//                                 "label": "Store",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php",
//                                 "label": "Browse all",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=4",
//                                 "label": "Shared hosting",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=1",
//                                 "label": "Ssl certificates",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=8",
//                                 "label": "Web design",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=10",
//                                 "label": "Developer hosting",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=2",
//                                 "label": "Weebly website builder",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=3",
//                                 "label": "Email spam filtering",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=9",
//                                 "label": "Web development",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=5",
//                                 "label": "Re-seller hosting",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=6",
//                                 "label": "Vps hosting",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?gid=7",
//                                 "label": "Dedicated server",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/index.php?rp=/store/ssl-certificates",
//                                 "label": "Ssl certificates",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/index.php?rp=/store/website-builder",
//                                 "label": "Website builder",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/index.php?rp=/store/email-services",
//                                 "label": "E-mail services",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?a=add&domain=register",
//                                 "label": "Register a new domain",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/cart.php?a=add&domain=transfer",
//                                 "label": "Transfer domains to us",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/index.php?rp=/announcements",
//                                 "label": "Announcements",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/index.php?rp=/knowledgebase",
//                                 "label": "Knowledgebase",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/serverstatus.php",
//                                 "label": "Network status",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/affiliates.php",
//                                 "label": "Affiliates",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/contact.php",
//                                 "label": "Contact us",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/clientarea.php",
//                                 "label": "Login",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/register.php",
//                                 "label": "Register",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://webhosting.5starcompany.com.ng/pwreset.php",
//                                 "label": "Forgot password?",
//                                 "subLinks": []
//                             },
//                             {
//                                 "url": "https://tawk.to/chat/5b3a09246d961556373d53e3/default/?$_tawk_popout=true",
//                                 "label": "Chat now",
//                                 "subLinks": []
//                             }
//                         ],
//                         "name": "default"
//                     }
//                 ]
//             }
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
//             "bottomTabBarItems": {
//                 "active": false,
//                 "tabMenus": [],
//                 "tabSelectionConfig": []
//             }
//         }
// }

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
