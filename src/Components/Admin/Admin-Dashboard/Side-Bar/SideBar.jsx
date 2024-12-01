import './SideBar.css';
import { FaTachometerAlt, FaChartLine, FaFileInvoice, FaCalendarAlt, FaRegCalendar, FaComments, FaBell, FaCog } from 'react-icons/fa';  // Import the icons you need

const SideBar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Analytics', icon: <FaChartLine /> },
    { name: 'Invoice', icon: <FaFileInvoice /> },
    { name: 'Schedule', icon: <FaCalendarAlt /> },
    { name: 'Calendar', icon: <FaRegCalendar /> },
    { name: 'Messages', icon: <FaComments /> },
    { name: 'Notification', icon: <FaBell /> },
    { name: 'Settings', icon: <FaCog /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="/public/Images/Side-Bar-Logo.png"
          alt="Logo"
          className="logoImage"
        />
        <h1 className="logoText">Side Bar</h1>
      </div>
      <div className="menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menuItem">
            <span className="icon">{item.icon}</span>
            <span className="menuText">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="logout">
        <img
          src="/public/Images/My-Picture-f.jpg"
          className="profileImage"
        />
        <div className="logoutText">
          <span className="name">Shihabul Islam Alvi</span>
          <span className="accountType">Font End Developer - React</span>
        </div>
        
      </div>
    </div>
  );
};

export default SideBar;
