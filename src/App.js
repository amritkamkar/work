// App.js
import React, { useState } from 'react';
import backgroundImage from './background.png';
import Dashboard from './dashboard';
import './App.css';
import './login.css';

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'admin' && password === '1234') {
      setUser({ username });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    // Simulate logout
    setUser(null);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <div className="login-container">
          <h1>Welcome</h1>
          <label htmlFor="username" className="login-label">Username:</label>
          <input type="text" id="username" className="login-input" onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="password" className="login-label">Password:</label>
          <input type="password" id="password" className="login-input" onChange={(e) => setPassword(e.target.value)} />

          <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;