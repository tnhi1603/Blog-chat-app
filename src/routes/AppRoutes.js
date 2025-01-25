import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Notifications from './Notifications';
import Chat from './Chat';
import Friend from './Friend';
import Profile from './Profile';
import Blog from './Blog';
import Register from './Register';
import Login from './Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/friends" element={<Friend />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
