// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ParkingSpaces from './components/ParkingSpaces';
import Reservations from './components/Reservations';
import Users from './components/Users';
import Reports from './components/Reports';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/parking-spaces" element={<ParkingSpaces />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/users" element={<Users />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;