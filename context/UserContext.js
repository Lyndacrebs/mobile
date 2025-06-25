// context/UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName, userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
