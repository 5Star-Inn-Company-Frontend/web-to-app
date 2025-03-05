import axiosInstance from "./apiConfig";

export const fetchMembers = async () => {
    const response = await axiosInstance.get("/member");
    return response.data;
};

export const createMember = async (member: string) => {
    const response = await axiosInstance.post("/member", member);
    return response.data;
};
