import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://web2app.prisca.5starcompany.com.ng/api/", //process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("token");
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
