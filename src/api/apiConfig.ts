import { getToken } from "@/hooks/useStorage";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://web2app.prisca.5starcompany.com.ng/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        const token = getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;
