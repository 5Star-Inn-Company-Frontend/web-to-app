import { CreateAppRequest, IEditApp } from "@/types/type";
import axiosInstance from "./apiConfig";

interface IUpdateApp {
    appId: number;
    appData: IEditApp;
}

export const createApp = async (data: CreateAppRequest) => {
    const response = await axiosInstance.post("/app", data);
    return response.data;
};

export const fetchApps = async () => {
    const response = await axiosInstance.get("/app");
    return response.data;
};

export const fetchApp = async (id: number) => {
    const response = await axiosInstance.get(`/app/${id}`);
    return response.data;
};

export const updateApp = async ({ appData, appId }: IUpdateApp) => {
    const response = await axiosInstance.put(`/app/${appId}`, appData);
    return response.data;
};
