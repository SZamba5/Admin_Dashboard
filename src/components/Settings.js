import React, { useState } from 'react';
import './Settings.css'; // Make sure to create this CSS file

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // In a real application, you would apply the dark mode to the entire app here
    // For now, we'll just toggle a class on the settings container
    document.body.classList.toggle('dark-mode');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // In a real application, you would send the new password to a server here
    alert('Password change functionality not implemented in this demo');
    setNewPassword('');
    setConfirmPassword('');
    setShowPasswordForm(false);
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Settings</h2>
      
      <div className="setting-item">
        <h3>Dark Mode</h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-item">
        <h3>Change Password</h3>
        <button onClick={() => setShowPasswordForm(!showPasswordForm)}>
          {showPasswordForm ? 'Cancel' : 'Change Password'}
        </button>
        {showPasswordForm && (
          <form onSubmit={handlePasswordChange} className="password-form">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Settings;