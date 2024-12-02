import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import {
  FaTachometerAlt,
  FaChartLine,
  FaFileInvoice,
  FaCalendarAlt,
  FaRegCalendar,
  FaComments,
  FaBell,
  FaCog,
} from 'react-icons/fa';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, notifications: false, path: '/dashboard' },
    { name: 'Analytics', icon: <FaChartLine />, notifications: false },
    { name: 'Invoice', icon: <FaFileInvoice />, notifications: false },
    { name: 'Schedule', icon: <FaCalendarAlt />, notifications: false },
    { name: 'Calendar', icon: <FaRegCalendar />, notifications: false },
    { name: 'Messages', icon: <FaComments />, notifications: true },
    { name: 'Notification', icon: <FaBell />, notifications: false },
    { name: 'Settings', icon: <FaCog />, notifications: false },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo" onClick={toggleSidebar}>
        <img
          src="/public/Images/Side-Bar-Logo.png"
          alt="Logo"
          className="logoImage"
        />
        {!isCollapsed && <h1 className="logoText">Wons</h1>}
      </div>
      <div className="menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menuItem">
            {item.path ? (
              <Link to={item.path} className="menuLink">
                <span className="icon">{item.icon}</span>
                {!isCollapsed && <span className="menuText">{item.name}</span>}
                {item.notifications && !isCollapsed && (
                  <span className="notificationBadge">49</span>
                )}
              </Link>
            ) : (
              <div className="menuItem">
                <span className="icon">{item.icon}</span>
                {!isCollapsed && <span className="menuText">{item.name}</span>}
              </div>
            )}
          </div>
        ))}
      </div>
      {!isCollapsed && (
        <div className="logout">
          <img
            src="/public/Images/My-Picture-f.jpg"
            alt="Profile"
            className="profileImage"
          />
          <div className="logoutText">
            <span className="name">Shihabul Islam Alvi</span>
            <span className="accountType">Front End Developer - React</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
