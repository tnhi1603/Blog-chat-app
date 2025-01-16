import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Notifications from './Notifications';
import Chat from './Chat';
import Friends from './Friends';
import Profile from './Profile';
import Blog from './Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
