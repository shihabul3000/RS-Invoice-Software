import Dashboard from "../Dashboard-Items/Dashboard"; 
import SideBar from "../Side-Bar/SideBar";

const AdminDashboardItem = () => {
  return (
    <div style={styles.app}>
      <SideBar />
      <Dashboard />
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    backgroundColor: '#f1f4fa',
    height: '100vh',
  },
};

export default AdminDashboardItem;
