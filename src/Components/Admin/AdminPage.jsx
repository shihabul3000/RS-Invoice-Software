import { useNavigate } from 'react-router-dom';
import './AdminPage.css'; // Assuming styles will be added here

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Navigate back to the invoice page
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <p>Welcome to the Admin Dashboard!</p>
      
      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPage;
