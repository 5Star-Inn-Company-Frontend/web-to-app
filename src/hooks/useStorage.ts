import { LoginResponse } from "@/types/type";

const getExpiryTime = () => {
    return Date.now() + 3600 * 1000;
};

export const getToken = () => {
    const token = sessionStorage.getItem("token");
    const expiryTime = sessionStorage.getItem("tokenExpiry");

    if (token && expiryTime && Date.now() > parseInt(expiryTime)) {
        removeToken();
        return null;
    }

    return token;
};

export const setToken = (token: string) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("tokenExpiry", getExpiryTime().toString());
};

export const removeToken = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("tokenExpiry");
};

export const setUser = (user: LoginResponse) => {
    sessionStorage.setItem("user", JSON.stringify(user));
};
export const getUser = () => {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
    sessionStorage.removeItem("user");
};
