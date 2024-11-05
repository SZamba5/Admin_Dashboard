import React from 'react';
import './Users.css'; // Make sure to create this CSS file

const Users = () => {
  // Dummy data for users
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', licensePlate: 'ABC123' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', licensePlate: 'XYZ789' },
    { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', licensePlate: 'DEF456' },
    { id: 4, name: 'Emily Brown', email: 'emily.brown@example.com', licensePlate: 'GHI789' },
    { id: 5, name: 'David Wilson', email: 'david.wilson@example.com', licensePlate: 'JKL012' },
    { id: 6, name: 'Sarah Davis', email: 'sarah.davis@example.com', licensePlate: 'MNO345' },
    { id: 7, name: 'Tom Anderson', email: 'tom.anderson@example.com', licensePlate: 'PQR678' },
    { id: 8, name: 'Lisa Taylor', email: 'lisa.taylor@example.com', licensePlate: 'STU901' },
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
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.licensePlate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;