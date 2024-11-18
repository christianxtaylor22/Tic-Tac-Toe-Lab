import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Assignment 4</h1>
      <nav>
        <Link to="UserList">User List</Link>
        <Link to="AddUser">Add User</Link>
      </nav>
    </div>
  );
}

export default Home;
