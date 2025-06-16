import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { View, Image, StyleSheet,  TouchableWithoutFeedback, Animated, ScrollView } from 'react-native';


import StackCursos from './StackCursos'; 
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
      bottom: 25,
      left: 20,
      right: 20,
      backgroundColor: 'transparent',
      elevation: 0,
      borderRadius: 30,
      height: 70,
    },
    tabBarIcon: ({ focused }) => {
      let icon;
      if (route.name === 'TelaChat') icon = iconChat;
      else if (route.name === 'StackCursos') icon = iconHome;
      else if (route.name === 'TelaUsuario') icon = iconUser;

      return icon ? (
        <Image
          source={icon}
          style={{
            width: 26,
            height: 26,
            tintColor: focused ? '#000' : '#B6B6B6'
          }}
        />
      ) : null;
    }
  })}
>
  {/* Os 3 principais que aparecem na Tab */}
  <Tab.Screen name="TelaChat" component={TelaChat} />
  <Tab.Screen name="StackCursos" component={StackCursos} />
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
