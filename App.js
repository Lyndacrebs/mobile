// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'; // ajuste o caminho se necessário
import { UserProvider } from './UserContext'; // ajuste o caminho conforme necessário

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </UserProvider>
  );
}