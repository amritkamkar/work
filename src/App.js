import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login'; // Assuming your login component is in a file named Login.js
import Home from './Home';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = ({ username }) => {
    setLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Redirect to="/home" />}
        </Route>
        <Route path="/home">
          {isLoggedIn ? <Home username={username} onLogout={handleLogout} /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;