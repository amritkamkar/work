// Option 1: Remove Unused Import
// Remove the import statement for useState if you don't plan to use it
// import React from 'react';

import background1 from './background1.jpg'; // Update the path to the image file
import './App.css';
import Login from './Login'; // Import the LoginForm component

function App() {
  // Utilize useState here if needed
  
  return (
    <div className="App-background">
      <header className="App-header">
        <img src={background1} className="App-logo" alt="background" />
        <Login />
      </header>
    </div>
  );
}

export default App;