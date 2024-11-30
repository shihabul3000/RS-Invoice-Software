import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import AdminPage from './Components/Admin/AdminPage';
import Invoice from './Components/Invoice/Invoice';

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <>
      {!isAdminPage && <Admin />} {/* Admin button is hidden on the admin page */}
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/admin" element={<AdminPage />} />
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
