// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName, userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};
