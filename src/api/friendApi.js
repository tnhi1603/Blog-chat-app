import axiosClient from './axiosClient';

const friendApi = {
    getFriend: (friendId) => axiosClient.get(`/friend/list/${friendId}`),
    addFriend: (data) => axiosClient.post('/friend/send', data),
    deleteFriend: (friendId) => axiosClient.delete(`/friend/${friendId}`),
    acceptFriend: (friendId) => axiosClient.put(`/friend/accept/${friendId}`),
    rejectFriend: (friendId) => axiosClient.put(`/friend/reject/${friendId}`),
};

export default friendApi;
