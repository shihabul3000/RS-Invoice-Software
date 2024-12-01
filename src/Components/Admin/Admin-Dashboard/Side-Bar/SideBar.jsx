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
  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, notifications: false },
    { name: 'Analytics', icon: <FaChartLine />, notifications: false },
    { name: 'Invoice', icon: <FaFileInvoice />, notifications: false },
    { name: 'Schedule', icon: <FaCalendarAlt />, notifications: false },
    { name: 'Calendar', icon: <FaRegCalendar />, notifications: false },
    { name: 'Messages', icon: <FaComments />, notifications: true, },
    { name: 'Notification', icon: <FaBell />, notifications: false },
    { name: 'Settings', icon: <FaCog />, notifications: false },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="/public/Images/Side-Bar-Logo.png"
          alt="Logo"
          className="logoImage"
        />
        <h1 className="logoText">Wons</h1>
      </div>
      <div className="menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menuItem">
            <span className="icon">{item.icon}</span>
            <span className="menuText">{item.name}</span>
            {item.notifications && (
              <span className="notificationBadge">{item.count}</span>
            )}
          </div>
        ))}
      </div>
      <div className="upgrade">
        <div className="upgradeContent">
          {/* <span>Upgrade Now</span> */}
        </div>
      </div>
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
    </div>
  );
};

export default SideBar;
