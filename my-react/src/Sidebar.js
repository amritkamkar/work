import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Sidebar.css'; // Import the CSS file for styling

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Let's Explore</h2>
            <ul>
                <li>
                    <Link to="/login">Login</Link> {/* Link to the login page */}
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;