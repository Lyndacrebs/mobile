import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { ChevronRight } from 'lucide-react-native'; // ou use outro ícone se preferir
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

export default function BemVindo1() {
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
    navigation.navigate('TelaCadastro');
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
          source={require('../assets/imagem-bemvindo.png')} // sua imagem customizada
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
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: currentSlide === index ? '#6E6EFF' : '#E5E7EB' }
              ]}
            />
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
    width: 40,
    height: 40
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 12
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins_300Light',
    textAlign: 'center',
    color: '#CBCBFD',
    marginBottom: 32
  },
  image: {
    width: 260,
    height: 200
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



// export default function BemVindo1({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}> Bem-vindo</Text>
//       <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('BemVindo2')}>
//         <Text style={styles.textoBotao}>Entrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1e1e2e',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   titulo: {
//     fontSize: 24,
//     color: '#ffffff',
//     marginBottom: 40,
//     textAlign: 'center',
//   },
//   botao: {
//     backgroundColor: '#03dac5',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     elevation: 5,
//   },
//   textoBotao: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });
