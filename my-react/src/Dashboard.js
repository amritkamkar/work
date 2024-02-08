
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Dashboard;