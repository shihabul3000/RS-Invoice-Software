import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import AdminPage from './Components/Admin/AdminPage';
import Invoice from './Components/Invoice/Invoice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Admin />
    </Router>
  );
}

export default App;
