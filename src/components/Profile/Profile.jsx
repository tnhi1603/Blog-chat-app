import React from 'react';
import Header from './Header/Header';
import Info from './Info/Info';
import Posts from './Posts/PostList';
import SidebarRight from './SidebarRight/SidebarRight';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <Header />
      <div className="profile-gap"></div>
      <div className="profile-content">
        <div className="profile-sidebar-left">
          <Info />
        </div>
        <div className="profile-main">
          <Posts />
        </div>
        <div className="profile-sidebar-right">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default Profile;
