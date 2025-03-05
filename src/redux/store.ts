import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import appReducer from "@/redux/app/appSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
