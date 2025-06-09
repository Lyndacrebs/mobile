import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';

export default function TelaUsuario() {
    const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

 const Voltar = () => {
    navigation.navigate('TelaChat');
    // aqui você pode usar navigation.navigate('Tela2') futuramente
  };


  return (
    <ScrollView style={styles.container}>
       <View style={styles.CabecalhoContainer}>
             <TouchableOpacity onPress={Voltar}>
               <Image
               source={require('../assets/seta.png')}
               style={styles.seta}
              />
             </TouchableOpacity>

      {/* Título */}
      <Text style={styles.titulo}>Perfil</Text>

      <View style={styles.rightIcons}>
        {/* Sininho com bolinha */}
        <TouchableOpacity onPress={Voltar}>
           <Image
               source={require('../assets/notificacao.png')}
               style={styles.notificacao}
              />
        </TouchableOpacity>

        {/* Engrenagem */}
        <TouchableOpacity onPress={Voltar}>
          <Image
               source={require('../assets/config.png')}
               style={styles.config}
              />
        </TouchableOpacity>
        </View>
      </View>

      {/* Topo com avatar e email */}
      <View style={styles.header}>
        <Image
          source={require('../assets/foto_perfil.png')} // imagem do avatar
          style={styles.avatar}
        />
        <Text style={styles.nome}>Fulano</Text>
        <Text style={styles.email}>usuario@gmail.com</Text>

        <TouchableOpacity style={styles.Editar}>
          <Text style={styles.EditarTexto}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Progresso */}
      <View style={styles.progressoContainer}>
        <Text style={styles.tituloProgresso}>Seu Progresso</Text>

        {/* Gráfico circular falso (exemplo visual) */}

        <View style={styles.grafico}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>4</Text>
          </View>

          <View style={styles.legenda}>
            <Text style={[styles.legendaTexto, { color: '#B6B6B6' }]}>● Desenho Técnico 40%</Text>
            <Text style={[styles.legendaTexto, { color: '#B6B6B6' }]}>● Prototipagem 30%</Text>
            <Text style={[styles.legendaTexto, { color: '#B6B6B6' }]}>● Nome do curso 20%</Text>
            <Text style={[styles.legendaTexto, { color: '#B6B6B6' }]}>● Design de Equipamentos 10%</Text>
          </View>
        </View>
      </View>

      {/* Medalhas */}
      <View style={styles.medalhasContainer}>
        <Text style={styles.titulo}>Suas Medalhas</Text>

       <View style={styles.grid}>
        <View style={styles.card}>
          <Image source={require('../assets/medalha1.png')} style={styles.icone} />
          <Text style={styles.texto}>Engrenagem de Ouro</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/medalha2.png')} style={styles.icone} />
          <Text style={styles.texto}>PLC Expert</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/medalha3.png')} style={styles.icone} />
          <Text style={styles.texto}>Estética Funcional</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/medalha4.png')} style={styles.icone} />
          <Text style={styles.texto}>NR Consciente</Text>
        </View>
          </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  CabecalhoContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
   titulo: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginRight: 184
  },
  seta: {
    width: 23,
    height: 14.8,
    padding: 5
  },
  notificacao: {
    width: 18,
    height: 18,
     marginRight: 12,
    position: 'relative'
  },
  config: {
    width: 24,
    height: 24,
    padding: 6
  },
   rightIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20
  },
  avatar: {
    width: 50,
    height: 50
  },
  nome: {
    marginTop: 10,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16
  },
  email: {
    fontSize: 14,
    Poppins_400Regular,
    color: '#000'
  },
  Editar: {
    backgroundColor: '#6E6EFF',
    borderRadius: 34,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 10
  },
  EditarTexto: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12
  },
  progressoContainer: {
    paddingHorizontal: 20,
    marginBottom: 30
  },
  tituloProgresso: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    marginBottom: 10
  },
  grafico: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 12,
    borderColor: '#6E6EFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 80,
    borderRightColor: '#000'
  },
  circleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  legenda: {
    marginLeft: -45
  },
  legendaTexto: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#BDBDBD', 
    marginBottom: 4
  },
  medalhasContainer: {
    paddingHorizontal: 20
  },
 grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 28
  },
  card: {
    width: '47%',
    height: 110,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#5C5C5C',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  icone: {
    width: 50,
    height: 50,
    marginBottom: 8,
    resizeMode: 'contain'
  }
});
