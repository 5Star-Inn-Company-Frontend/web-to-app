import axios from "./apiConfig";
import { CreateAppRequest, LoginRequest, RegisterRequest } from "@/types/type";

export const loginApi = async (data: LoginRequest) => {
    const response = await axios.post("/login", data);
    return response.data;
};

export const registerApi = async (data: RegisterRequest) => {
    const response = await axios.post("/register", data);
    return response.data;
};

export const createApp = async (data: CreateAppRequest) => {
    const response = await axios.post("/app", data);
    return response.data;
};
