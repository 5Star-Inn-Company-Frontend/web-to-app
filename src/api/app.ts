import { CreateAppRequest } from "@/types/type";
import axiosInstance from "./apiConfig";

export const createApp = async (data: CreateAppRequest) => {
    const response = await axiosInstance.post("/app", data);
    return response.data;
};

export const fetchApps = async () => {
    const response = await axiosInstance.get("/app");
    return response.data;
};
