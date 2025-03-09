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

const appReducers = combineReducers({
    appState: appStateReducer,
    branding: brandReducer,
    interface: interfaceReducer,
    linkHandling: linkHandlingReducer,
    navigation: navigationReducer,
    notification: notificationReducer,
    permission: permissionReducer,
    websiteOveride: websiteOverideReducer,
});

export const store = configureStore({
    reducer: {
        apps: appReducers,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
