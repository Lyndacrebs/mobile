import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { View, Image, StyleSheet,  TouchableWithoutFeedback, Animated, ScrollView } from 'react-native';


import TelaInicial from './TelaInicial';
import TelaChat from './TelaChat';
import TelaUsuario from './TelaUsuario';

import iconChat from '../assets/chat.png';
import iconHome from '../assets/home.png';
import iconUser from '../assets/user.png';

const Tab = createBottomTabNavigator();

export default function RotaInterna() {

const scrollY = useRef(new Animated.Value(0)).current;

<Animated.ScrollView
  onScroll={Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  )}
  scrollEventThrottle={16}
>
  {/* Conteúdo da tela */}
</Animated.ScrollView>

  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      right: 16,
      height: 60,
      backgroundColor: 'transparent',
      borderRadius: 40,
      borderTopWidth: 0,
      elevation: 0,
    },
    tabBarBackground: () => (
      <BlurView
        tint="light"
        intensity={60} // Aumente isso se quiser mais contraste
        style={{
          flex: 1,
          borderRadius: 40,
          overflow: 'hidden',
        }}
      />
    ),
    tabBarItemStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarIcon: ({ focused }) => {
      let icon;
      if (route.name === 'TelaChat') icon = iconChat;
      else if (route.name === 'TelaInicial') icon = iconHome;
      else if (route.name === 'TelaUsuario') icon = iconUser;

      return (
        <Image
          source={icon}
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? '#000' : '#B6B6B6',
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

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
