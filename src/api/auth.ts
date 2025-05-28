import axiosInstance from "./apiConfig";
import { LoginRequest, RegisterRequest, ResetPasswordRequest } from "@/types/type";

export const loginApi = async (data: LoginRequest) => {
    const response = await axiosInstance.post("/login", data);
    return response.data;
};

export const registerApi = async (data: RegisterRequest) => {
    const response = await axiosInstance.post("/register", data);
    return response.data;
};

export const forgotPasswordApi = async (email: string) => {
    const response = await axiosInstance.post("/forgot-password", { email });
    return response.data;
};

export const resetPasswordApi = async (data: ResetPasswordRequest) => {
    const response = await axiosInstance.post("/reset-password", data);
    return response.data;
};
