import React, { useState } from 'react';
import './Header.css'; // Make sure to create this CSS file

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  // Dummy data for notifications
  const notifications = [
    { id: 1, message: "New reservation request" },
    { id: 2, message: "Parking space A3 is now available" },
    { id: 3, message: "Monthly report is ready" },
  ];

  return (
    <header className="dashboard-header">
      <h1>Parking Manager Dashboard</h1>
      <div className="header-controls">
        <div className="notifications">
          <button onClick={() => setShowNotifications(!showNotifications)}>
            🔔 {/* Bell icon */}
            <span className="notification-count">{notifications.length}</span>
          </button>
          {showNotifications && (
            <div className="notification-menu">
              {notifications.map(notification => (
                <div key={notification.id} className="notification-item">
                  {notification.message}
                </div>
              ))}
            </div>
          )}
        </div>
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