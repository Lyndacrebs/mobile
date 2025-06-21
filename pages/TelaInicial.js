import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; 

export default function TelaInicial() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedDataLimiteId, setSelectedDataLimiteId] = useState(null);

  useFocusEffect(
    useCallback(() => {
      setSelectedTab(null);
    }, [])
  );

  const handlePress = (tab) => {
    setSelectedTab(tab);
    navigation.navigate(tab === 'Online' ? 'TelaOnline' : 'TelaPresencial');
  };

  const handleCardPress = (id) => {
    setSelectedCourseId(id);
  };

  const handleDataLimitePress = (id) => {
    setSelectedDataLimiteId(id);
  };

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  const cursosDataLimite = [
    { id: 1, titulo: 'Desenho Técnico Mecânico', DataLimite: 'Data limite 18.12', imagem: require('../assets/cursoIcon1.png'), cor: '#E8F4FD' },
    { id: 2, titulo: 'Prototipagem e impressão...', DataLimite: 'Data limite 18.12', imagem: require('../assets/cursoIcon2.png'), cor: '#F3E8FF' },
    { id: 3, titulo: 'Materiais industriais e sust...', DataLimite: 'Data limite 18.12', imagem: require('../assets/cursoIcon3.png'), cor: '#FFF7ED' },
    { id: 4, titulo: 'Modelagem paramétrica', DataLimite: 'Data limite 18.12', imagem: require('../assets/cursoIcon4.png'), cor: '#F0FDF4' }
  ];

  const cursosAndamento = [
    { id: 1, titulo: 'Desenho Técnico Mecânico', subtitulo: 'Período da realização:', data: 'Inicial: 5. 5. 2025\nFinal: 18. 12. 2025', duracao: '24 horas', tipo: 'Online', imagem: require('../assets/curso1.png') },
    { id: 2, titulo: 'Prototipagem e Impre...', subtitulo: 'Período da realização:', data: 'Inicial: 5. 5. 2025\nFinal: 18. 12. 2025', duracao: '22 horas', tipo: 'Presencial', imagem: require('../assets/curso2.png') },
  ];

  const CursoDataLimiteItem = ({ curso }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('TelaDetalhesCurso', { curso })}
    style={[
      styles.cursoDataLimiteItem,
      selectedDataLimiteId === curso.id && styles.selectedCard
    ]}
  >
    <View style={[styles.iconContainer, { backgroundColor: curso.cor }]}>
      <Image source={curso.imagem} style={styles.iconImage} resizeMode="contain" />
    </View>
    <View style={styles.cursoInfo}>
      <Text style={styles.cursoTitulo}>{curso.titulo}</Text>
      <Text style={styles.cursoDataLimite}>{curso.DataLimite}</Text>
    </View>
    <TouchableOpacity style={styles.playButton}>
      <Ionicons name="play-circle-outline" size={24} color="#7C3AED" />
    </TouchableOpacity>
  </TouchableOpacity>
);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
  style={styles.content}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: tabBarHeight + 40 }}  // 40 é só um espaçamento extra
>
       <View style={styles.Botaousuario}>
  <View style={styles.headerLeft}>
    <Image
      source={require('../assets/foto_perfil.png')}
      style={styles.usuario}
      resizeMode="contain"
    />
    <Text style={styles.titulo}>Olá Fulano!</Text>
  </View>

  <Image
    source={require('../assets/logo.png')}
    style={styles.logo}
    resizeMode="contain"
  />
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

<View style={styles.modalidadeContainer}>
  <Text style={styles.modalidadeTitulo}>Modalidades de Curso</Text>
  <Text style={styles.modalidadeTexto}>
    Escolha como deseja aprender! Nossos cursos estão disponíveis nas modalidades online e presencial, para que você possa estudar no seu ritmo ou vivenciar a experiência em sala de aula. Selecione uma opção e confira os conteúdos disponíveis.
  </Text>

  <View style={styles.botoesContainer}>
       <TouchableOpacity
          onPress={() => handlePress('Online')}
          style={[
            styles.botao,
            selectedTab === 'Online' && styles.botaoAtivo
          ]}
        >
          <Text style={[
            styles.textoBotao,
            selectedTab === 'Online' && styles.textoBotaoAtivo
          ]}>
            Online
          </Text>
        </TouchableOpacity>

       <TouchableOpacity
          onPress={() => handlePress('Presencial')}
          style={[
            styles.botao,
            selectedTab === 'Presencial' && styles.botaoAtivo
          ]}
        >
          <Text style={[
            styles.textoBotao,
            selectedTab === 'Presencial' && styles.textoBotaoAtivo
          ]}>
            Presencial
          </Text>
        </TouchableOpacity>
      </View>

</View>

        {/* Comece a Aprender */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comece a aprender</Text>
          {cursosDataLimite.map((curso) => (
            <CursoDataLimiteItem key={curso.id} curso={curso} />
          ))}
        </View>

        {/* Continuar os seus cursos */}
  <View style={styles.continuarContainer}>
  <Text style={styles.continuarTitulo}>Continuar os seus cursos</Text>
  <View style={styles.continuarCursosGrid}>
    {cursosAndamento.map((curso) => (
      <TouchableOpacity
        key={curso.id}
        style={[
          styles.continuarCursoCard,
          selectedCourseId === curso.id && styles.selectedCard
        ]}
        onPress={() => handleCardPress(curso.id)}
        activeOpacity={0.8}
      >
        <Image source={curso.imagem} style={styles.continuarImagem} />

        <View style={styles.continuarInfo}>
          <View style={styles.continuarTipoDuracao}>
            <Ionicons name="laptop-outline" size={16} color="#9CA3AF" />
            <Text style={styles.tipoTexto}>| {curso.tipo}</Text>
          </View>

          <View style={styles.continuarTipoDuracao}>
            <Ionicons name="time-outline" size={16} color="#000" />
            <Text style={styles.tempoTexto}>{curso.duracao}</Text>
          </View>

          <Text style={styles.continuarTituloCurso}>{curso.titulo}</Text>
        </View>
      </TouchableOpacity>
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
  paddingHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

headerLeft: {
  flexDirection: 'row',
  alignItems: 'center'
},

usuario: {
  width: 40,
  height: 40,
  borderRadius: 20,
  marginRight: 10,
},

titulo: {
  fontSize: 16,
  fontFamily: 'Poppins_600SemiBold',
  color: '#000000',
},

logo: {
  width: 40,
  height: 40,
  resizeMode: 'contain',
},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15
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
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  botao: {
    borderWidth: 1,
    borderColor: '#4848D8',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginHorizontal: 8,
  },
  botaoAtivo: {
    backgroundColor: '#4848D8',
  },
  textoBotao: {
    color: '#4848D8',
    fontWeight: '600',
  },
  textoBotaoAtivo: {
    color: '#FFFFFF',
  },
 modalidadeContainer: {
  backgroundColor: '#F0EDFF', // tom lilás claro
  borderRadius: 16,
  padding: 16,
  marginTop: 30,
  marginBottom: 30
},

modalidadeTitulo: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#4848D8', // azul/lilás
  textAlign: 'center',
  marginBottom: 10,
},

modalidadeTexto: {
  fontSize: 14,
  color: '#444',
  textAlign: 'center',
  lineHeight: 22,
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
  cursoDataLimiteItem: {
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
  cursoDataLimite: {
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
    fontFamily: 'Poppins_600SemiBold',
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
    paddingBottom: 10,
  },
  continuarImagem: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  continuarInfo: {
    padding: 10,
    alignItems: 'center',
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
    textAlign: 'center',
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: '#4848D8',
  },
});