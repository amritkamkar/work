import React from 'react';

function Profile() {
  // Dummy user data (replace with actual user data)
  const user = {
    name: 'Amrita',
    email: 'amrita@example.com',
    bio: 'Living in the fire.',
    // Add more user data as needed
  };

  return (
    <div style={{ backgroundColor: 'lightgray', padding: '20px', borderRadius: '8px' }}>
      <h1 style={{ color: 'blue' }}>Profile</h1>
      <div>
        <strong style={{ color: 'green' }}>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Bio:</strong> {user.bio}
      </div>
      {/* Add more profile information as needed */}
    </div>
  );
}

export default Profile;