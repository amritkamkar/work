// components/Layout.js
import React from 'react';
import AdminImage from './AdminImage';
import UserSidebar from './UserSidebar';

const Layout = ({ user, onLogout, children }) => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
        <button onClick={onLogout}>Logout</button>
      </div>

      {/* Admin Image */}
      <div style={{ padding: '20px' }}>
        <AdminImage />
      </div>

      {/* User Sidebar */}
      <div style={{ width: '200px', borderLeft: '1px solid #ccc', padding: '20px' }}>
        <UserSidebar user={user} />
      </div>
    </div>
  );
};

export default Layout;