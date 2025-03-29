import axiosClient from "./axiosClient";

const authApi = {
    signUp: (data) => axiosClient.post("/api/signup", data),
    login: (data) => axiosClient.post("/api/login", data),
    getProfile: () => axiosClient.get("/profile")
};

export default authApi;
