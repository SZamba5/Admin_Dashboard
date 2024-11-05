import React from 'react';

const ParkingSpaceOverview = () => {
  // Fetch parking space data from your API
  const totalSpaces = 100;
  const occupiedSpaces = 75;

  return (
    <div className="parking-space-overview">
      <h3>Parking Space Overview</h3>
      <p>Total Spaces: {totalSpaces}</p>
      <p>Occupied Spaces: {occupiedSpaces}</p>
      <p>Available Spaces: {totalSpaces - occupiedSpaces}</p>
    </div>
  );
};

export default ParkingSpaceOverview;