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

export const getShareAppDetails = async (id: string) => {
    const response = await axiosInstance.get(`/view-app/${id}`);
    return response.data;
};

export const buildAppAndroid = async ({ appId }: { appId: string }) => {
    const response = await axiosInstance.put(`/build-app/${appId}/android`, appId);
    return response.data;
};

export const fileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axiosInstance.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};
