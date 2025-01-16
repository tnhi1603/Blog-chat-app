import React from 'react';
import '../App.css';
import Dashboard from '../components/Home/Dashboard/Dashboard';
import RightSidebar from '../components/Home/RightSidebar/RightSidebar';

const Home = () => {
    return (
        <div className="layout">
          <Dashboard />
          <RightSidebar />
        </div>
    );
  };

export default Home;
