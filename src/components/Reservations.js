import React from 'react';
import './Reservation.css'; // Make sure to create this CSS file

const Reservation = () => {
  // Dummy data for reservations
  const parkingSpots = [
    { id: 'A1', status: 'available' },
    { id: 'A2', status: 'reserved', user: 'John Doe', time: '14:00 - 16:00' },
    { id: 'A3', status: 'available' },
    { id: 'B1', status: 'reserved', user: 'Jane Smith', time: '09:00 - 11:00' },
    { id: 'B2', status: 'available' },
    { id: 'B3', status: 'reserved', user: 'Mike Johnson', time: '13:00 - 15:00' },
    { id: 'C1', status: 'available' },
    { id: 'C2', status: 'reserved', user: 'Emily Brown', time: '10:00 - 12:00' },
    { id: 'C3', status: 'available' },
  ];

  return (
    <div className="reservation-container">
      <h2>Reservations</h2>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Spot ID</th>
            <th>Status</th>
            <th>Reserved By</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {parkingSpots.map((spot) => (
            <tr key={spot.id} className={spot.status}>
              <td>{spot.id}</td>
              <td>{spot.status.charAt(0).toUpperCase() + spot.status.slice(1)}</td>
              <td>{spot.user || '-'}</td>
              <td>{spot.time || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;