import axiosClient from "./axiosClient";

const messageApi = {
    sendMessage: (data) => axiosClient.post("/message/send", data),
    markAsSeen: (messageId) => axiosClient.put(`/message/read/${messageId}`),
    getMessages: (chatId) => axiosClient.get(`/message/${chatId}`),
    delMessages: (data) => axiosClient.delete(`/message/delete`, data)
};

export default messageApi;