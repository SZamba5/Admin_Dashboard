import React from 'react';
import './ParkingSpaces.css';

const ParkingSpaces = () => {
  // Define the layout of the parking lot
  const parkingLot = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['C1', 'C2', 'C3', 'C4', 'C5'],
    ['D1', 'D2', 'D3', 'D4', 'D5'],
  ];

  // Dummy data for occupied spaces (you would fetch this from your backend)
  const occupiedSpaces = ['A2', 'B4', 'C1', 'D3'];

  return (
    <div className="parking-spaces">
      <h2>Parking Spaces</h2>
      <div className="parking-lot">
        {parkingLot.map((row, rowIndex) => (
          <div key={rowIndex} className="parking-row">
            {row.map((space) => (
              <div
                key={space}
                className={`parking-space ${occupiedSpaces.includes(space) ? 'occupied' : 'available'}`}
              >
                {space}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-color occupied"></div>
          <span>Occupied</span>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpaces;