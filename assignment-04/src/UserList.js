import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function UserList({ users, deleteUser }) {
  return (
    <div className="container">
      <h1>User List</h1>
      <ul style={{ padding: 0, listStyleType: 'none' }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            <span>{user.name}</span>
            <div>
              <Link
                to={`EditUser/${user.id}`}
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  marginRight: '8px',
                }}
              >
                Edit
              </Link>
              <Link
                to={`UserDetails/${user.id}`}
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  marginRight: '8px',
                }}
              >
                Details
              </Link>
              <button
                onClick={() => deleteUser(user.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '4px',
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link
        to="/AddUser"
        style={{
          display: 'inline-block',
          textAlign: 'center',
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '4px',
          textDecoration: 'none',
          marginTop: '10px',
        }}
      >
        Add New User
      </Link>
      <Outlet />
    </div>
  );
}

export default UserList;
