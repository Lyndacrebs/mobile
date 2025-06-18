// RotaInterna.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { View, Image, StyleSheet } from 'react-native';

import StackCursos from './StackCursos';
import TelaChat    from './TelaChat';
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

        // estilo geral da TabBar
        tabBarStyle: {
          position: 'absolute',
          bottom: 12,
          left:   12,
          right:  12,
          height: 60,
          borderRadius: 30,
          overflow: 'hidden',
          borderTopWidth: 0,
          elevation: 5,
        },

        // fundo com blur + leve esbranquiçado
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={50}
            style={StyleSheet.absoluteFill}
          />
        ),

        // ícone centralizado e troca de cor
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'TelaChat')    icon = iconChat;
          if (route.name === 'StackCursos') icon = iconHome;
          if (route.name === 'TelaUsuario') icon = iconUser;

          return (
            <View style={styles.iconWrapper}>
              <Image
                source={icon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#000' : '#B6B6B6'
                }}
              />
            </View>
          );
        }
      })}
    >
      <Tab.Screen name="TelaChat"    component={TelaChat} />
      <Tab.Screen name="StackCursos" component={StackCursos} />
      <Tab.Screen name="TelaUsuario" component={TelaUsuario} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
