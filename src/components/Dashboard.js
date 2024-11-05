// src/components/Dashboard.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ParkingSpaceOverview from './ParkingSpaceOverview';
import ReservationManagement from './ReservationManagement';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <main>
          <h2>Welcome to Parking Manager Dashboard</h2>
          <ParkingSpaceOverview />
          <ReservationManagement />
          {/* Add more components as needed */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
