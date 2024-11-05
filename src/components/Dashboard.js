// src/components/Dashboard.js
import React from 'react';
import Footer from './Footer';
import ParkingSpaceOverview from './ParkingSpaceOverview';
import ReservationManagement from './ReservationManagement';
import CameraView from './CameraView';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <main>
          <ParkingSpaceOverview />
          <ReservationManagement />
          <CameraView />
          {/* Add more components as needed */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;