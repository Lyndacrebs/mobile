import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function TelaConfiguracao() {
 const navigation = useNavigation();

   let [fontsLoaded] = useFonts({
     Poppins_300Light,
     Poppins_400Regular,
     Poppins_600SemiBold
   });
 

const goBack = () => {
  navigation.navigate('TelaUsuario');
};

  const handleAccountPress = () => {
    console.log('Conta pressionada');
    // Navegar para tela de conta
  };

  const handleNotificationPress = () => {
    console.log('Notificação pressionada');
    // Navegar para tela de notificações
  };

  const handlePreferencesPress = () => {
    console.log('Preferências pressionada');
    // Navegar para tela de preferências
  };

  const handleExitPress = () => {
    console.log('Sair pressionado');
    // Implementar lógica de logout
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
     
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Configuração</Text>
      </View>

      {/* Menu Items Container */}
      <View style={styles.menuContainer}>
        {/* Conta */}
        <TouchableOpacity style={styles.menuItem} onPress={handleAccountPress}>
          <View style={styles.menuItemContent}>
            <Icon name="person" size={20} color="#666" style={styles.menuIcon} />
            <Text style={styles.menuText}>Conta</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Notificação */}
        <TouchableOpacity style={styles.menuItem} onPress={handleNotificationPress}>
          <View style={styles.menuItemContent}>
            <Icon name="notifications" size={20} color="#666" style={styles.menuIcon} />
            <Text style={styles.menuText}>Notificação</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Preferências */}
        <TouchableOpacity style={[styles.menuItem, styles.lastMenuItem]} onPress={handlePreferencesPress}>
          <View style={styles.menuItemContent}>
            <Icon name="tune" size={20} color="#666" style={styles.menuIcon} />
            <Text style={styles.menuText}>Preferências</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Exit Button */}
      <View style={styles.exitContainer}>
        <TouchableOpacity style={styles.exitItem} onPress={handleExitPress}>
          <View style={styles.menuItemContent}>
            <Icon name="exit-to-app" size={20} color="#666" style={styles.menuIcon} />
            <Text style={styles.menuText}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    marginTop: 50
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  title: {
    fontSize: 18,
       fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    color: '#333',
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    fontWeight: '400',
  },
  exitContainer: {
    backgroundColor: '#fff',
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  exitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

