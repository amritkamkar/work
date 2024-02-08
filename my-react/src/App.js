import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
import backgroundImage from './background1.jpg';

function App() {
  return (
    
      <Router>
        <Routes> {/* Wrap Routes around Route components */}
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
  
  );
}

export default App;