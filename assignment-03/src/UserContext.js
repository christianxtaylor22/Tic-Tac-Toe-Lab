import React, { createContext, useContext } from 'react';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const user = { name: 'Christian Taylor' }; 
  return (
    <UserContext.Provider value={user}>
    {children}
    </UserContext.Provider>
  )
  
};

export const useUser = () => useContext(UserContext);
