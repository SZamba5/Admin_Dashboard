import React from 'react';

const ReservationManagement = () => {
  // Fetch reservation data from your API
  const reservations = [
    { id: 1, user: 'John Doe', space: 'A1', startTime: '2024-11-05 10:00', endTime: '2024-11-05 14:00' },
    { id: 2, user: 'Jane Smith', space: 'B3', startTime: '2024-11-05 12:00', endTime: '2024-11-05 18:00' },
  ];

  return (
    <div className="reservation-management">
      <h3>Reservation Management</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Space</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.user}</td>
              <td>{reservation.space}</td>
              <td>{reservation.startTime}</td>
              <td>{reservation.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationManagement;