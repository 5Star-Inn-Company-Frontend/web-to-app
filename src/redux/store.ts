import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import brandReducer from "@/redux/app/brandSlice";
import notificationReducer from "@/redux/app/NotificationSlice";
import appStateReducer from "@/redux/app/appStateSlice";
import interfaceReducer from "@/redux/app/interfaceSlice";
import linkHandlingReducer from "@/redux/app/linkHandlingSlice";
import navigationReducer from "@/redux/app/NavigationSlice";
import permissionReducer from "@/redux/app/permissionSlice";
import websiteOverideReducer from "@/redux/app/websiteOverideSlice";
import navReducer from "@/redux/nav/navslice";
import pluginReducer from "@/redux/app/nativePluginSlice";
import editorReducer from "@/redux/editor/editorSlice";
import buildSettingsReducer from "@/redux/app/buildSettingSlice";

import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";

const appReducers = combineReducers({
    appState: appStateReducer,
    branding: brandReducer,
    interface: interfaceReducer,
    linkHandling: linkHandlingReducer,
    navigation: navigationReducer,
    notification: notificationReducer,
    permission: permissionReducer,
    websiteOveride: websiteOverideReducer,
    plugin: pluginReducer,
    buildSettings: buildSettingsReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["apps"],
};

const rootReducer = combineReducers({
    apps: appReducers,
    nav: navReducer,
    auth: authReducer,
    editor: editorReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
