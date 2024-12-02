// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import AdminPage from './Components/Admin/AdminPage';
import Invoice from './Components/Invoice/Invoice';
import SideBarDashboardIcon from './Components/Admin/Admin-Dashboard/Side-Bar/SideBarDashboardIcon/SideBarDashboardIcon';

function App() {
  const location = useLocation();

  // Check if the current route is /admin or /dashboard
  const hideAdminButton = ['/admin', '/dashboard'].includes(location.pathname);

  return (
    <>
      {/* Admin button is visible on all pages except /admin and /dashboard */}
      <div className="adminButtonWrapper">
        {!hideAdminButton && <Admin />}
      </div>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<SideBarDashboardIcon />} />
      </Routes>
    </>
  );
}

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
