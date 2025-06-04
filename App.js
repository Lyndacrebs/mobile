// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'; // ajuste o caminho se necessário

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}