import { LoginResponse } from "@/types/type";

export const getToken = () => {
    return sessionStorage.getItem("token");
};

export const setToken = (token: string) => {
    sessionStorage.setItem("token", token);
};

export const removeToken = () => {
    sessionStorage.removeItem("token");
};

export const setUser = (user: LoginResponse) => {
    sessionStorage.setItem("user", JSON.stringify(user));
};
export const getUser = () => {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
    sessionStorage.removeUser("user");
};
