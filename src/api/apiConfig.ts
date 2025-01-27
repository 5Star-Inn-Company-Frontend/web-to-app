import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://web2app.prisca.5starcompany.com.ng/api/", //process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
