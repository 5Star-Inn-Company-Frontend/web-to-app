import { getToken, getUser, removeToken, removeUser, setToken, setUser } from "@/hooks/useStorage";
import { AuthState, LoginResponse } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
    user: getUser(),
    token: getToken(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginResponse>) => {
            state.user = action.payload.data;
            state.token = action.payload.token;
            setToken(action.payload.token);
            setUser(action.payload.data);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            removeToken();
            removeUser();
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
