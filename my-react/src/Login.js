import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import backgroundImage from './background1.jpg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your authentication logic
    if (username === 'admin' && password === '1234') {
      setMessage('Login Successful!');
      // Navigate to the desired page after successful login
      navigate('/dashboard'); // Example: Navigate to '/dashboard'
    } else {
      setMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh' }}>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default Login;