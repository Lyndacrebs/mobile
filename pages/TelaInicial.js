import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('Online');

const irParaOnline = () => {
  navigation.navigate('TelaOnline');
};

const irParaPresencial = () => {
  navigation.navigate('TelaPresencial');
};


   let [fontsLoaded] = useFonts({
      Poppins_300Light,
      Poppins_400Regular,
      Poppins_600SemiBold
    });


  const cursosProgresso = [
    {
      id: 1,
      titulo: 'Desenho Técnico Mecânico',
      progresso: '12/10 lições',
      imagem: require('../assets/cursoIcon1.png'),
      cor: '#E8F4FD',
    },
    {
      id: 2,
      titulo: 'Prototipagem e impressão...',
      progresso: '2/3 dias',
      imagem: require('../assets/cursoIcon2.png'),
      cor: '#F3E8FF',
    },
    {
      id: 3,
      titulo: 'Materiais industriais e sust...',
      progresso: '8/20 lições',
      imagem: require('../assets/cursoIcon3.png'),
      cor: '#FFF7ED',
    },
    {
      id: 4,
      titulo: 'Modelagem paramétrica',
      progresso: '1/10 lições',
      imagem: require('../assets/cursoIcon4.png'),
      cor: '#F0FDF4',
    },
  ];

  const cursosAndamento = [
    {
      id: 1,
      titulo: 'Desenho Técnico Mecânico',
      subtitulo: 'Período da realização:',
      data: 'Inicial: 5. 5. 2025\nFinal: 18. 12. 2025',
      duracao: '24 horas',
      tipo: 'Online',
      imagem: require('../assets/curso1.png'), // placeholder
    },
    {
      id: 2,
      titulo: 'Prototipagem e Impre...',
      subtitulo: 'Período da realização:',
      data: 'Inicial: 5. 5. 2025\nFinal: 18. 12. 2025',
      duracao: '22 hor',
      tipo: 'Presencial',
      imagem: require('../assets/curso2.png'), // placeholder
    },
  ];

  const CursoProgressoItem = ({ curso }) => (
    <TouchableOpacity style={styles.cursoProgressoItem}>
      <View style={[styles.iconContainer, { backgroundColor: curso.cor }]}>
  <Image
    source={curso.imagem}
    style={styles.iconImage}
    resizeMode="contain"
  />
</View>
      <View style={styles.cursoInfo}>
        <Text style={styles.cursoTitulo}>{curso.titulo}</Text>
        <Text style={styles.cursoProgresso}>{curso.progresso}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Ionicons name="play-circle-outline" size={24} color="#7C3AED" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const CursoDisponivelItem = ({ curso }) => (
    <View style={styles.cursoDisponivelItem}>
      <View style={styles.cursoImageContainer}>
        <View style={styles.placeholderImage}>
          <Ionicons name="image-outline" size={40} color="#9CA3AF" />
        </View>
      </View>
      <View style={styles.cursoDetalhes}>
        <View style={styles.cursoHeader}>
          <Ionicons name="globe-outline" size={16} color="#6B7280" />
          <Text style={styles.cursoTipo}>{curso.tipo}</Text>
          <Ionicons name="time-outline" size={16} color="#6B7280" />
          <Text style={styles.cursoDuracao}>{curso.duracao}</Text>
        </View>
        <Text style={styles.cursoTituloDisponivel}>{curso.titulo}</Text>
        <Text style={styles.cursoSubtitulo}>{curso.subtitulo}</Text>
        <Text style={styles.cursoData}>{curso.data}</Text>
      </View>
    </View>
  );

  const Perfil = () => {
    navigation.navigate('TelaUsuario');
    // aqui você pode usar navigation.navigate('Tela2') futuramente
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.Botaousuario}>
        <Image
          source={require('../assets/foto_perfil.png')}
          style={styles.usuario}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Olá Fulano!</Text>

 <View style={styles.rightIcons}>
        {/* Sininho com bolinha */}
           <Image
               source={require('../assets/logo.png')}
               style={styles.logo}
              />
        
        </View>
  </View>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          
            <Image
               source={require('../assets/searchIcon.png')}
               style={styles.searchIcon}
              />
  
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#FFFFFF"
          />
        </View>
        {/* Tabs */}
       <View style={styles.tabsContainer}>
  <TouchableOpacity
    style={[styles.tab, selectedTab === 'Online' && styles.activeTab]}
    onPress={() => {
      setSelectedTab('Online');
      irParaOnline();
    }}
  >
    <Text style={[styles.tabText, selectedTab === 'Online' && styles.activeTabText]}>
      Online
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.tab, selectedTab === 'Presencial' && styles.activeTab]}
    onPress={() => {
      setSelectedTab('Presencial');
      irParaPresencial();
    }}
  >
    <Text style={[styles.tabText, selectedTab === 'Presencial' && styles.activeTabText]}>
      Presencial
    </Text>
  </TouchableOpacity>
</View>


        {/* Continue Aprendendo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Continue Aprendendo</Text>
          {cursosProgresso.map((curso) => (
            <CursoProgressoItem key={curso.id} curso={curso} />
          ))}
        </View>

        {/* Continuar os seus cursos */}
       <View style={styles.continuarContainer}>
  <Text style={styles.continuarTitulo}>Continuar os seus cursos</Text>
  <View style={styles.continuarCursosGrid}>
    {cursosAndamento.map((curso) => (
      <View key={curso.id} style={styles.continuarCursoCard}>
        <Image  source={curso.imagem} style={styles.continuarImagem} />
        <View style={styles.continuarInfo}>
          <View style={styles.continuarTipoDuracao}>
            <Ionicons name="laptop-outline" size={16} color="#9CA3AF" />
            <Text style={styles.tipoTexto}>| {curso.tipo}</Text>
            <Ionicons name="time-outline" size={16} color="#000" style={{ marginLeft: 10 }} />
            <Text style={styles.tempoTexto}>{curso.duracao}</Text>
          </View>
          <Text style={styles.continuarTituloCurso}>{curso.titulo}</Text>
        </View>
      </View>
    ))}
  </View>
</View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  Botaousuario: {
     marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  usuario: {
    marginRight: 20,
    marginLeft:-12,
    width: 47,
    height: 50
  },
   titulo: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginRight: 140
  },
   rightIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 20,
    height: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  headerTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    fontWeight: '600',
    color: '#111827'
  },
  content: {
    flex: 1,
    paddingHorizontal: 20
  },
   searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6E6EFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    marginTop: 40,
    height: 50
  },
  searchIcon: {
    width: 33,
    height: 33,
    marginRight: 20,
    marginLeft: -8
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#FFFFFF'
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6E6EFF'
  },
  tabText: {
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000'
  },
  activeTabText: {
    color: '#6E6EFF',
    fontSize: 12
  },
  section: {
    marginBottom: 30
  },
  sectionTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20
  },
  cursoProgressoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  iconText: {
    fontSize: 20
  },
  cursoInfo: {
    flex: 1
  },
  cursoTitulo: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4
  },
  cursoProgresso: {
    fontSize: 14,
    color: '#6B7280'
  },
  playButton: {
    padding: 5
  },
  continuarContainer: {
  backgroundColor: '#6E6EFF',
  borderRadius: 12,
  padding: 16,
  marginBottom: 30,
},
continuarTitulo: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 16,
},
continuarCursosGrid: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},

continuarCursoCard: {
  width: '48%',
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  overflow: 'hidden',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3.84,
  elevation: 5,
},

continuarImagem: {
  width: '100%',
  height: 90,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
},

continuarInfo: {
  padding: 10,
},

continuarTipoDuracao: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 4,
},

tipoTexto: {
  fontSize: 12,
  color: '#9CA3AF',
  marginLeft: 4,
},

tempoTexto: {
  fontSize: 12,
  color: '#000',
  marginLeft: 4,
},

continuarTituloCurso: {
  fontSize: 14,
  fontWeight: '600',
  color: '#111827',
},
});
