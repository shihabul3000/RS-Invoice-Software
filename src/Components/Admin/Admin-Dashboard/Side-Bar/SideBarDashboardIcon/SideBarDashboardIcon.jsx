import './SideBarDashboardIcon.css'
import { useNavigate } from 'react-router-dom';
const SideBarDashboardIcon = () => {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1); // Go back to the previous page
    };

    return (
        <>
        
        <div className="dashboard">
      <button className="backButton" onClick={handleBack}>
        Back
      </button>
      <h1>Welcome to the Dashboard</h1>
      <p>This is a blank page for the Dashboard component.</p>
    </div>
  



        
        
        
        
        
        
        </>
    );
};

export default SideBarDashboardIcon;