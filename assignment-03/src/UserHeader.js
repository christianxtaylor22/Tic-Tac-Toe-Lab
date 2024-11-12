import React from 'react';
import { useUser } from './UserContext';

function UserHeader() {
  const user = useUser();
  return <h3>Welcome, {user.name}!</h3>;
}

export default UserHeader;
