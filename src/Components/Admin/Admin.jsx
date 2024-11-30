import { useState } from 'react';
import './Admin.css';


const Admin = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // Open the admin page in a new tab
      window.open('/admin', '_blank'); 
      setShowLogin(false); // Close the login modal
    } else {
      alert('Incorrect username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      {/* Admin Button */}
      <button className="admin-btn" onClick={() => setShowLogin(true)}>Admin</button>

      {/* Login Modal */}
      {showLogin && (
        <div className="login-modal">
          <div className="login-content">
            <h2>Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="password-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-icon" onClick={togglePasswordVisibility}>
                👁️
              </span>
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
