import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from './TelaInicial';
import TelaChat from './TelaChat';
import TelaUsuario from './TelaUsuario';

// Ícones personalizados
import iconHome from '../assets/home.png';
import iconChat from '../assets/chat.png';
import iconUser from '../assets/user.png';

const Tab = createBottomTabNavigator();

export default function RotaInterna() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10
        },
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'TelaInicial') {
            icon = iconHome;
          } else if (route.name === 'TelaChat') {
            icon = iconChat;
          } else if (route.name === 'TelaUsuario') {
            icon = iconUser;
          }

          return (
            <Image
              source={icon}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? '#000' : 'gray'
              }}
            />
          );
        }
      })}
    >
     
      <Tab.Screen name="TelaChat" component={TelaChat} />
      <Tab.Screen name="TelaInicial" component={TelaInicial} />
      <Tab.Screen name="TelaUsuario" component={TelaUsuario} />
    </Tab.Navigator>
  );
}
