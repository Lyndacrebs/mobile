import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';


export default function TelaOnline() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Online');
  const [searchText, setSearchText] = useState('');

  const irParaPresencial = () => {
    navigation.navigate('TelaPresencial');
  };

  const irParaOnline = () => {
    navigation.navigate('TelaOnline');
  };

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const cursos = [
     {
      id: 1,
      titulo: 'Desenho Assistido por Co...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
      cor: '#DBEAFE',
      selected: true,
    },
   {
      id: 2,
      titulo: 'Modelagem Paramétrica',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
      cor: '#1F2937',
    },
    {
      id: 3,
      titulo: 'Ergonomia no Design de P...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
      cor: '#1E3A8A',
    },
    {
      id: 4,
      titulo: 'Materiais industriais e Su...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
      cor: '#10B981',
    },
    {
      id: 5,
      titulo: 'Desenho Técnico Mecânico',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
      cor: '#F3F4F6',
    },
    {
      id: 6,
      titulo: 'Nome do curso',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
      cor: '#F9FAFB',
    },
  ];

  const CursoCard = ({ curso, isLeft }) => (
    <TouchableOpacity
      style={[
        styles.cursoCard,
        { marginRight: isLeft ? 8 : 0, marginLeft: isLeft ? 0 : 8 },
        curso.selected && styles.selectedCard,
      ]}
    >
      <View
        style={[styles.cursoImageContainer, { backgroundColor: curso.cor }]}
      />
      <View style={styles.cursoContent}>
        <View style={styles.cursoHeader}>
          <Ionicons name="desktop-outline" size={14} color="#6B7280" />
          <Text style={styles.cursoTipo}>{curso.tipo}</Text>
          <Ionicons
            name="time-outline"
            size={14}
            color="#6B7280"
            style={{ marginLeft: 12 }}
          />
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
        

        {/* Grid */}
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
}

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
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  activeTabText: {
    color: '#6E6EFF',
    fontSize: 12
  },
  tabText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },
   activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6E6EFF'
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
  cursoContent: {
    padding: 12,
  },
  cursoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  cursoTipo: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  cursoDuracao: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  cursoTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  cursoSubtitulo: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  cursoData: {
    fontSize: 11,
    color: '#9CA3AF',
    lineHeight: 14,
  },
});
