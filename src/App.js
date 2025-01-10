import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import RightSidebar from './components/RightSidebar/RightSidebar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <Dashboard />
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
