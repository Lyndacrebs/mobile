// StackCursos.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe suas telas
import TelaInicial from './TelaInicial';
import TelaOnline from './TelaOnline';
import TelaPresencial from './TelaPresencial';

const Stack = createNativeStackNavigator();

export default function StackCursos() {
  return (
    <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="TelaOnline" component={TelaOnline} />
      <Stack.Screen name="TelaPresencial" component={TelaPresencial} />
    </Stack.Navigator>
  );
}
