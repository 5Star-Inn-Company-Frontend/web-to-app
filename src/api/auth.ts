import axiosInstance from "./apiConfig";
import { LoginRequest, RegisterRequest } from "@/types/type";

export const loginApi = async (data: LoginRequest) => {
    const response = await axiosInstance.post("/login", data);
    return response.data;
};

export const registerApi = async (data: RegisterRequest) => {
    const response = await axiosInstance.post("/register", data);
    return response.data;
};
