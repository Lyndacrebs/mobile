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
   Image,
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

 
  const handlePress = (tab) => {
    setSelectedTab(tab);
    navigation.navigate(tab === 'Online' ? 'TelaOnline' : 'TelaPresencial');
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
      imagem: require('../assets/curso9.png'),
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
       imagem: require('../assets/curso10.png'),
    },
    {
      id: 3,
      titulo: 'Ergonomia no Design de P...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
       imagem: require('../assets/curso6.png'),
    },
    {
      id: 4,
      titulo: 'Materiais industriais e Su...',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
      imagem: require('../assets/curso11.png'),
    },
    {
      id: 5,
      titulo: 'Desenho Técnico Mecânico',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
      imagem: require('../assets/curso1.png'),
    },
    {
      id: 6,
      titulo: 'Nome do curso',
      subtitulo: 'Período da realização:',
      dataInicial: 'Inicial: 5. 5. 2025',
      dataFinal: 'Final: 18. 12. 2025',
      duracao: '22 horas',
      tipo: 'Online',
     imagem: require('../assets/curso12.png'),
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
        <View style={[styles.cursoImageContainer, { backgroundColor: curso.cor }]}>
           <Image source={curso.imagem} style={styles.cursoImagem} resizeMode="contain" />
         </View>
         
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
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
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
