import React from 'react';
import './Header.css'; // Make sure to create this CSS file

const Header = () => {
  return (
    <header className="dashboard-header">
      <h1>Parking Manager Dashboard</h1>
      <div className="header-controls">
        <div className="user-profile">
          <div className="profile-container">
            <button>
              👤 John Doe {/* Replace with actual user name */}
            </button>
            <div className="profile-menu">
              <a href="/profile">View Profile</a>
              <a href="/settings">Settings</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
