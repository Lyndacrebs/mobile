// routes.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo1 from './pages/BemVindo1';
import BemVindo2 from './pages/BemVindo2';
import BemVindo3 from './pages/BemVindo3';
import TelaCadastro from './pages/TelaCadastro';
import TelaLogin from './pages/TelaLogin';
import RotaInterna from './pages/RotaInterna';
import TelaOnline from './pages/TelaOnline';
import TelaPresencial from './pages/TelaPresencial';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="BemVindo1">
      <Stack.Screen name="BemVindo1" component={BemVindo1} options={{ headerShown: false }}/>
       <Stack.Screen name="BemVindo2" component={BemVindo2} options={{ headerShown: false }}/>
        <Stack.Screen name="BemVindo3" component={BemVindo3} options={{ headerShown: false }}/>
         <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{ headerShown: false }}/>
         <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }}/>
         <Stack.Screen name="RotaInterna" component={RotaInterna} options={{ headerShown: false }} />
         <Stack.Screen name="TelaOnline" component={TelaOnline} options={{ headerShown: false }} />
         <Stack.Screen name="TelaPresencial" component={TelaPresencial} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
