// components/UserSidebar.js
import React from 'react';

const UserSidebar = ({ user }) => {
  return (
    <div>
      <h3>User Sidebar</h3>
      <p>Username: {user.username}</p>
      {/* Add more user-related information */}
    </div>
  );
};

export default UserSidebar;