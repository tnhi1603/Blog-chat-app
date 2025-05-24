import axiosClient from "./axiosClient";

const postApi = {
    getPosts: () => axiosClient.get("/post"),
    getPost: (postId) => axiosClient.get(`/post/${postId}`),
    createPost: (data) => axiosClient.post("/post/create", data),
    deletePost: (postId) => axiosClient.delete(`/post/${postId}`),
    updatePost: (postId, data) => axiosClient.put(`/post/${postId}`, data),
    likePost: (postId, data) => axiosClient.put(`/post/${postId}/like`, data),
    commentPost: (postId, data) => axiosClient.post(`/post/${postId}/comment`, data)
};

export default postApi;
