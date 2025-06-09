import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaInicial() {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('Online');

  const cursosProgresso = [
    {
      id: 1,
      titulo: 'Desenho Técnico Mecânico',
      progresso: '12/10 lições',
      icon: '💻',
      cor: '#E8F4FD',
    },
    {
      id: 2,
      titulo: 'Prototipagem e impressão...',
      progresso: '2/3 dias',
      icon: '🎨',
      cor: '#F3E8FF',
    },
    {
      id: 3,
      titulo: 'Materiais industriais e sust...',
      progresso: '8/20 lições',
      icon: '🏗️',
      cor: '#FFF7ED',
    },
    {
      id: 4,
      titulo: 'Modelagem paramétrica',
      progresso: '1/10 lições',
      icon: '📐',
      cor: '#F0FDF4',
    },
  ];

  const cursosDisponiveis = [
    {
      id: 1,
      titulo: 'Desenho Técnico Mecânico',
      subtitulo: 'Período da realização:',
      data: 'Inicial: 5. 5. 2025\nFinal: 18. 12. 2025',
      duracao: '24 horas',
      tipo: 'Online',
      imagem: require('../assets/medalha1.png'), // placeholder
    },
    {
      id: 2,
      titulo: 'Prototipagem e Impre...',
      subtitulo: 'Período da realização:',
      data: 'Inicial: 5. 5. 2025\nFinal: 18. 12. 2025',
      duracao: '22 hor',
      tipo: 'Presencial',
      imagem: require('../assets/medalha1.png'), // placeholder
    },
  ];

  const CursoProgressoItem = ({ curso }) => (
    <TouchableOpacity style={styles.cursoProgressoItem}>
      <View style={[styles.iconContainer, { backgroundColor: curso.cor }]}>
        <Text style={styles.iconText}>{curso.icon}</Text>
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
      
<View style={styles.logoContainer}>
        <Image
          source={require('../assets/foto_perfil.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Olá Fulano!</Text>

 <View style={styles.rightIcons}>
        {/* Sininho com bolinha */}
           <Image
               source={require('../assets/logo.png')}
               style={styles.notificacao}
              />
        
        </View>
  </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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
            onPress={() => setSelectedTab('Online')}
          >
            <Text style={[styles.tabText, selectedTab === 'Online' && styles.activeTabText]}>
              Online
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Presencial' && styles.activeTab]}
            onPress={() => setSelectedTab('Presencial')}
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
        <View style={styles.section}>
          <TouchableOpacity style={styles.continuarButton}>
            <Text style={styles.continuarButtonText}>Continuar os seus cursos</Text>
          </TouchableOpacity>
          
          <View style={styles.cursosGrid}>
            {cursosDisponiveis.map((curso) => (
              <CursoDisponivelItem key={curso.id} curso={curso} />
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
  logoContainer: {
     marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
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
    fontSize: 16,
    color: '#FFFFFF'
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 20
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6E6EFF'
  },
  tabText: {
    fontSize: 16,
    color: '#6B7280'
  },
  activeTabText: {
    color: '#6E6EFF',
    fontWeight: '600'
  },
  section: {
    marginBottom: 30
  },
  sectionTitle: {
    fontSize: 20,
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
  continuarButton: {
    backgroundColor: '#6E6EFF',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20
  },
  continuarButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },
  cursosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  cursoDisponivelItem: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  cursoImageContainer: {
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden'
  },
  placeholderImage: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cursoDetalhes: {
    padding: 12
  },
  cursoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  cursoTipo: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
    marginRight: 12
  },
  cursoDuracao: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4
  },
  cursoTituloDisponivel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4
  },
  cursoSubtitulo: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2
  },
  cursoData: {
    fontSize: 11,
    color: '#9CA3AF',
    lineHeight: 14
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB'
  },
  navItem: {
    padding: 10
  },
});
