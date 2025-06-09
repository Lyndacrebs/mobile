import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { View, Image, StyleSheet } from 'react-native';

// Telas
import TelaInicial from './TelaInicial';
import TelaChat from './TelaChat';
import TelaUsuario from './TelaUsuario';

// Ícones
import iconChat from '../assets/chat.png';
import iconHome from '../assets/home.png';
import iconUser from '../assets/user.png';

const Tab = createBottomTabNavigator();

export default function RotaInterna() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: 'transparent',
          elevation: 0,
          borderRadius: 30,
          height: 70,
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={30}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              borderRadius: 30,
              overflow: 'hidden',
            }}
          />
        ),
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'TelaChat') icon = iconChat;
          else if (route.name === 'TelaInicial') icon = iconHome;
          else if (route.name === 'TelaUsuario') icon = iconUser;

          return (
            <View style={styles.iconWrapper}>
              <Image
                source={icon}
                style={{
                  width: 26,
                  height: 26,
                  tintColor: focused ? '#000' : '#B6B6B6'
                }}
              />
            </View>
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

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
