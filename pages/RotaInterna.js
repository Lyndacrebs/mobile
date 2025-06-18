// RotaInterna.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { View, Image, StyleSheet, Platform } from 'react-native';

import StackCursos from './StackCursos';
import TelaChat from './TelaChat';
import TelaUsuario from './TelaUsuario';

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
          bottom: 12,
          marginHorizontal: 20,
          height: 65,
          borderRadius: 30,
          overflow: 'hidden',
          borderTopWidth: 0,
          backgroundColor: 'transparent', // Blur + cor translúcida vão cuidar do fundo
          elevation: Platform.OS === 'android' ? 8 : 0,
          shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },

        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={60}
            style={StyleSheet.absoluteFill}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'rgba(240, 240, 255, 0.6)', // Tom lilás claro com transparência
              }}
            />
          </BlurView>
        ),

        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'TelaChat') icon = iconChat;
          if (route.name === 'StackCursos') icon = iconHome;
          if (route.name === 'TelaUsuario') icon = iconUser;

          return (
            <View style={styles.iconWrapper}>
              <Image
                source={icon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#000' : '#B6B6B6',
                }}
                resizeMode="contain"
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="TelaChat" component={TelaChat} />
      <Tab.Screen name="StackCursos" component={StackCursos} />
      <Tab.Screen name="TelaUsuario" component={TelaUsuario} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
