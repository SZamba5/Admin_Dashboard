import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();

  // Dummy data for users (this should be fetched from your backend in a real application)
  const users = [
    { id: 1, fullName: 'John Doe', email: 'john.doe@example.com', licensePlate: 'ABC123', carModel: 'Toyota Camry', carColor: 'Blue', lastLogin: '2025-01-27 09:15:00', hasReservation: true },
    { id: 2, fullName: 'Jane Smith', email: 'jane.smith@example.com', licensePlate: 'XYZ789', carModel: 'Honda Civic', carColor: 'Red', lastLogin: '2025-01-28 08:30:00', hasReservation: false },
    { id: 3, fullName: 'Mike Johnson', email: 'mike.johnson@example.com', licensePlate: 'DEF456', carModel: 'Ford Focus', carColor: 'Silver', lastLogin: '2025-01-26 14:45:00', hasReservation: true },
    { id: 4, fullName: 'Emily Brown', email: 'emily.brown@example.com', licensePlate: 'GHI789', carModel: 'Chevrolet Malibu', carColor: 'Black', lastLogin: '2025-01-28 10:00:00', hasReservation: false },
  ];

  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-info">
        <p><strong>Full Name:</strong> {user.fullName}</p>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>License Plate:</strong> {user.licensePlate}</p>
        <p><strong>Car Model:</strong> {user.carModel}</p>
        <p><strong>Car Color:</strong> {user.carColor}</p>
        <p><strong>Last Login:</strong> {user.lastLogin}</p>
        <p><strong>Has Reservation:</strong> {user.hasReservation ? 'Yes' : 'No'}</p>
      </div>
      <Link to="/users" className="back-button">Back to Users List</Link>
    </div>
  );
};

export default UserDetails;
