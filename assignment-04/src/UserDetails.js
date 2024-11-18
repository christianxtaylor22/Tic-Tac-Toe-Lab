import React from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return (
      <div className="container">
        <h1>User Not Found</h1>
        <Link to="/UserList" style={{ textDecoration: 'none', color: '#007bff' }}>
          Back to User List
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <Link to="/UserList" style={{ textDecoration: 'none', color: '#007bff' }}>
        Back to User List
      </Link>
    </div>
  );
}

export default UserDetails;
