import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-Type": "application/json"
    }
});

// Thêm interceptor để xử lý lỗi
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Lỗi API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosClient;
