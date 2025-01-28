import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

const Users = () => {
  const users = [
    { id: 1, fullName: 'John Doe', email: 'john.doe@example.com', licensePlate: 'ABC123', carModel: 'Toyota Camry', carColor: 'Blue', lastLogin: '2025-01-27 09:15:00', hasReservation: true },
    { id: 2, fullName: 'Jane Smith', email: 'jane.smith@example.com', licensePlate: 'XYZ789', carModel: 'Honda Civic', carColor: 'Red', lastLogin: '2025-01-28 08:30:00', hasReservation: false },
    { id: 3, fullName: 'Mike Johnson', email: 'mike.johnson@example.com', licensePlate: 'DEF456', carModel: 'Ford Focus', carColor: 'Silver', lastLogin: '2025-01-26 14:45:00', hasReservation: true },
    { id: 4, fullName: 'Emily Brown', email: 'emily.brown@example.com', licensePlate: 'GHI789', carModel: 'Chevrolet Malibu', carColor: 'Black', lastLogin: '2025-01-28 10:00:00', hasReservation: false },
  ];

  return (
    <div className="users-container">
      <h2>Registered Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>License Plate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.licensePlate}</td>
              <td>
                <Link to={`/user/${user.id}`} className="view-info-button">View Info</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
