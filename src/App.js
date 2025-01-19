import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/register', '/login']; // Các đường dẫn không muốn hiển thị Navbar
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
};

// Bao bọc App bằng Router để sử dụng useLocation
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
