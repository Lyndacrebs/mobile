import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { ChevronRight } from 'lucide-react-native'; // ou use outro ícone se preferir
import { useNavigation } from '@react-navigation/native';


export default function BemVindo1() {
  const navigation = useNavigation();
  const slideIndex = 0;
  const [currentSlide, setCurrentSlide] = useState(0);

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const nextSlide = () => {
    navigation.navigate('BemVindo2');
    // aqui você pode usar navigation.navigate('Tela2') futuramente
  };

  const skipWelcome = () => {
    navigation.navigate('RotaInterna');
    // aqui você pode usar navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      {/* Logo no canto superior direito */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Conteúdo central */}
      <View style={styles.content}>
        <Text style={styles.title}>Sua entrada no mundo industrial começa aqui</Text>
        <Text style={styles.subtitle}>
          Domine processos e equipamentos essenciais que as empresas realmente buscam.
        </Text>

        <Image
          source={require('../assets/bemVindo1.png')} // sua imagem customizada
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={skipWelcome}>
          <Text style={styles.skipButton}>PULAR</Text>
        </TouchableOpacity>

      <View style={styles.pagination}>
  {[0, 1, 2].map((index) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        if (index === 0) navigation.navigate('BemVindo1');
        if (index === 1) navigation.navigate('BemVindo2');
        if (index === 2) navigation.navigate('BemVindo3');
      }}
    >
      <View
        style={[
          styles.dot,
          {
            backgroundColor: slideIndex === index ? '#6E6EFF' : '#E5E7EB'
          }
        ]}
      />
    </TouchableOpacity>
  ))}
</View>

        <TouchableOpacity onPress={nextSlide} style={styles.nextButton}>
          <ChevronRight size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingTop: 48
  },
  logoContainer: {
    position: 'absolute',
    top: 24,
    right: 24
  },
  logo: {
    width: 47,
    height: 50
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'left',
    color: '#fff',
    marginBottom: 12
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins_300Light',
    textAlign: 'left',
    color: '#CBCBFD',
    marginBottom: 32
  },
  image: {
    width: 516,
    height: 524,
    marginTop: 80
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  skipButton: {
    color: '#6E6EFF',
    fontWeight: '600',
    fontSize: 14
  },
  pagination: {
    flexDirection: 'row',
    gap: 8
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4
  },
  nextButton: {
    width: 48,
    height: 48,
    backgroundColor: '#6E6EFF',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


