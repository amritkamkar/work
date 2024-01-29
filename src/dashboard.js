// components/Dashboard.js
import React from 'react';
import adminImage  from './admin.png';
const Dashboard = ({ user, onLogout }) => {
  return (
    <div>
      <img src={adminImage} alt="admin Image " style = {{ width: '200px', height:'200px' }}/>
      <h2>Welcome, {user.username}!</h2>
      {/* Add content specific to the dashboard */}
      <button onClick={onLogout} style={{ position: 'absolute', top: 10, right: 10 }}>Logout</button>
      </div>
  );
};

export default Dashboard;