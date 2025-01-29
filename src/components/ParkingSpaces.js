import React, { useState } from 'react';
import './ParkingSpaces.css';

const ParkingSpaces = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const parkingData = [
    { 
      spot: 'A1', 
      reserved: true, 
      occupied: true, 
      user: {
        name: 'John Doe',
        id: 'JD001',
        car: 'Toyota Camry',
        licensePlate: 'ABC123'
      }
    },
    { 
      spot: 'A2', 
      reserved: false, 
      occupied: false, 
      user: null 
    },
    { 
      spot: 'B1', 
      reserved: true, 
      occupied: false, 
      user: null 
    },
    { 
      spot: 'B2', 
      reserved: false, 
      occupied: true, 
      user: {
        name: 'Jane Smith',
        id: 'JS002',
        car: 'Honda Civic',
        licensePlate: 'XYZ456'
      }
    },
  ];

  const showUserInfo = (user) => {
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="parking-table">
      <table>
        <thead>
          <tr>
            <th>Spot</th>
            <th>Reserved</th>
            <th>Occupied</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parkingData.map((spot) => (
            <tr key={spot.spot}>
              <td>{spot.spot}</td>
              <td>{spot.reserved ? 'Yes' : 'No'}</td>
              <td>{spot.occupied ? 'Yes' : 'No'}</td>
              <td>{spot.user ? spot.user.name : 'N/A'}</td>
              <td>
                {spot.user && (
                  <button onClick={() => showUserInfo(spot.user)}>Info</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="popup">
          <div className="popup-content">
            <h2>User Information</h2>
            <div className="user-details">
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>ID:</strong> {selectedUser.id}</p>
              <p><strong>Car:</strong> {selectedUser.car}</p>
              <p><strong>License Plate:</strong> {selectedUser.licensePlate}</p>
            </div>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkingSpaces;
