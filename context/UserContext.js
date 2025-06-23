
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nomeAluno, setNomeAluno] = useState('');

  return (
    <UserContext.Provider value={{ nomeAluno, setNomeAluno }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
