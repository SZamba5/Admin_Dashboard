// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ParkingSpaces from './components/ParkingSpaces';
import Reservations from './components/Reservations';
import Users from './components/Users';
import Reports from './components/Reports';
import Settings from './components/Settings';
import UserDetails from './components/UserDetails';
import Login from './components/Login'; // Import the Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && <Header onLogout={handleLogout} />}
        <div className="main-content">
          {isLoggedIn && <Sidebar />}
          <main>
            <Routes>
            <Route path="/user/:id" element={<UserDetails />} />

              <Route path="/login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
              <Route 
                path="/dashboard" 
                element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/parking-spaces" 
                element={isLoggedIn ? <ParkingSpaces /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/reservations" 
                element={isLoggedIn ? <Reservations /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/users" 
                element={isLoggedIn ? <Users /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/reports" 
                element={isLoggedIn ? <Reports /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/settings" 
                element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} 
              />
              <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
              
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;