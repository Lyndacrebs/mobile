import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';



export default function TelaPresencial() {
   const irParaPresencial = () => {
      navigation.navigate('TelaPresencial');
    };
  
    const irParaOnline = () => {
      navigation.navigate('TelaOnline');
    };
  
  
   const navigation = useNavigation();
  
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('Presencial');

   let [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_600SemiBold
      });
  
  const cursos = [
    {
      id: 1,
      titulo: 'Design de Equipamentos...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Presencial',
      imagem: require('../assets/curso3.png'),
      cor: '#F3F4F6',
      selected: true,
    },
    {
      id: 2,
      titulo: 'SolidWorks para Indústria',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Presencial',
      imagem: '💻',
      cor: '#DBEAFE',
    },
    {
      id: 3,
      titulo: 'CAD Avançado para Proje...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Presencial',
      imagem: '🔧',
      cor: '#FEF2F2',
    },
    {
      id: 4,
      titulo: 'Design Centrado no Usuá...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Presencial',
      imagem: '👤',
      cor: '#F0FDF4',
    },
    {
      id: 5,
      titulo: 'Prototipagem e Impre...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Presencial',
      imagem: '🖨️',
      cor: '#F8FAFC',
    },
    {
      id: 6,
      titulo: 'Desenho Assistido por Co...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Presencial',
      imagem: '📐',
      cor: '#1F2937',
    },
  ];

  const CursoCard = ({ curso, isLeft }) => (
  <TouchableOpacity 
    style={[
      styles.cursoCard, 
      { marginRight: isLeft ? 8 : 0, marginLeft: isLeft ? 0 : 8 },
      curso.selected && styles.selectedCard
    ]}
  >
    <View style={[styles.cursoImageContainer, { backgroundColor: curso.cor }]}>
      <Image source={curso.imagem} style={styles.cursoImagem} resizeMode="contain" />
    </View>
    
    <View style={styles.cursoContent}>
      <View style={styles.cursoHeader}>
        <Ionicons name="location-outline" size={14} color="#6B7280" />
        <Text style={styles.cursoTipo}>{curso.tipo}</Text>
        <Ionicons name="time-outline" size={14} color="#6B7280" style={{ marginLeft: 8 }} />
        <Text style={styles.cursoDuracao}>{curso.duracao}</Text>
      </View>
      
      <Text style={styles.cursoTitulo}>{curso.titulo}</Text>
      <Text style={styles.cursoSubtitulo}>{curso.subtitulo}</Text>
      <Text style={styles.cursoData}>{curso.dataInicial}</Text>
      <Text style={styles.cursoData}>{curso.dataFinal}</Text>
    </View>
  </TouchableOpacity>
);


  const renderCursos = () => {
    const rows = [];
    for (let i = 0; i < cursos.length; i += 2) {
      rows.push(
        <View key={i} style={styles.cursoRow}>
          <CursoCard curso={cursos[i]} isLeft={true} />
          {cursos[i + 1] && <CursoCard curso={cursos[i + 1]} isLeft={false} />}
        </View>
      );
    }
    return rows;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchIconContainer}>
            <Ionicons name="search" size={19} color="#6E6EFF" />
          </View>
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
          <Text style={[
            styles.tabText,
            selectedTab === 'Online' && styles.activeTabText
          ]}>
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
          <Text style={[
            styles.tabText,
            selectedTab === 'Presencial' && styles.activeTabText
          ]}>
            Presencial
          </Text>
        </TouchableOpacity>
        </View>

        {/* Cursos Grid */}
        <ScrollView 
          style={styles.cursosContainer} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {renderCursos()}
        </ScrollView>
      </View>
       <View style={{ height: 100 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6E6EFF',
    borderRadius: 25,
    paddingHorizontal: 12,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  searchIconContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
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
  cursosContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  cursoRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cursoCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#4848D8',
  },
  cursoImageContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursoEmoji: {
    fontSize: 40,
  },
  cursoContent: {
    padding: 12,
  },
  cursoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cursoTipo: {
    fontSize: 12,
    Poppins_600SemiBold,
    color: '#6B7280',
    marginLeft: 4,
  },
  cursoDuracao: {
    fontSize: 12,
    Poppins_600SemiBold,
    color: '#6B7280',
    marginLeft: 4,
  },
  cursoTitulo: {
    fontSize: 16,
    Poppins_600SemiBold,
    color: '#000',
    marginBottom: 6,
  },
  cursoSubtitulo: {
    fontSize: 12,
    Poppins_300Light,
    color: '#000',
    marginBottom: 4,
  },
  cursoData: {
    fontSize: 12,
    color: '#000',
    Poppins_400Regular
  },
});
