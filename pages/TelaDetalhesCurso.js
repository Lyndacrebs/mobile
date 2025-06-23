import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function TelaDetalhesCurso() {
  const navigation = useNavigation();
  const route = useRoute();

  // Recebendo id_curso e nomeAluno via params da TelaInicial
  const { id_curso, nomeAluno, nomeCurso } = route.params;

  const dataLimiteCurso = new Date('2025-12-18');  // Exemplo fixo por enquanto

  const modulos = [
    { id: 1, titulo: 'Introdução ao Desenho Técnico', duracao: '22 horas', topicos: ['Conceitos básicos', 'Instrumentos de aplicação'], cor: '#E8F4FD' },
    { id: 2, titulo: 'Normas Técnicas e Padronização', duracao: '22 horas', topicos: ['ABNT NBR 10067', 'Escalas e montagem'], cor: '#F3E8FF' },
    { id: 3, titulo: 'Tipos de Linhas e Projeções', duracao: '22 horas', topicos: ['Linhas contínuas', 'Projeções ortogonais'], cor: '#FFF7ED' },
    { id: 4, titulo: 'Representação de Vistas', duracao: '22 horas', topicos: ['Vista frontal', 'Vista auxiliar'], cor: '#F0FDF4' },
  ];

  const handleInscricao = async () => {
    const hoje = new Date();
    const status = hoje > dataLimiteCurso ? 'pendente' : 'andamento';

    try {
      await axios.post('http://10.136.23.120:3000/inscrever', {
        id_curso: id_curso,
        nome_aluno: nomeAluno,
        status: status,
        data_inscricao: hoje.toISOString().split('T')[0]
      });

      Alert.alert('Sucesso', 'Inscrição realizada com sucesso!');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível fazer a inscrição.');
    }
  };

  const ModuloCard = ({ modulo }) => (
    <View style={[styles.moduloCard, { backgroundColor: modulo.cor }]}>
      <View style={styles.moduloHeader}>
        <Text style={styles.moduloTitulo}>{modulo.titulo}</Text>
        <View style={styles.moduloDuracao}>
          <Ionicons name="time-outline" size={16} color="#6B7280" />
          <Text style={styles.duracaoText}>{modulo.duracao}</Text>
        </View>
      </View>

      <View style={styles.topicosContainer}>
        {modulo.topicos.map((topico, index) => (
          <View key={index} style={styles.topicoItem}>
            <View style={styles.bulletPoint} />
            <Text style={styles.topicoText}>{topico}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.comecarButton}>
        <Ionicons name="play-circle" size={20} color="#8B5CF6" />
        <Text style={styles.comecarText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Botão Voltar */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#7C3AED" />
          </TouchableOpacity>
          <Text style={styles.cursoTitulo}>{nomeCurso}</Text>
        </View>

        {/* Imagem */}
        <View style={styles.cursoImageContainer}>
          <View style={styles.imagePlaceholder}>
            <Image source={require('../assets/imagemCurso1.png')} />
          </View>
        </View>

        {/* Descrição */}
        <Text style={styles.cursoDescricao}>
          O curso tem como objetivo capacitar profissionais e estudantes da área industrial para interpretar,
          elaborar e revisar desenhos técnicos aplicados à fabricação de peças e equipamentos mecânicos.
          Abordando normas técnicas, tipos de linhas, projeções ortogonais, cotagem, tolerâncias,
          engenharia, usinagem, manutenção e projetos industriais.
        </Text>

        {/* Botão de Inscrição */}
        <TouchableOpacity style={styles.botaoInscrever} onPress={handleInscricao}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#FFFFFF" />
          <Text style={styles.textoBotaoInscrever}>Inscrever-se no Curso</Text>
        </TouchableOpacity>

        {/* Módulos */}
        <View style={styles.modulosGrid}>
          {modulos.map((modulo) => (
            <ModuloCard key={modulo.id} modulo={modulo} />
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
    marginTop: 30
  },
  backButton: { padding: 5 },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 10 },
  cursoTitulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 10
  },
  cursoImageContainer: { marginBottom: 20 },
  imagePlaceholder: {
    height: 203,
    width: '100%',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursoDescricao: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 20,
  },
  botaoInscrever: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6E6EFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBotaoInscrever: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  modulosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moduloCard: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
  },
  moduloHeader: { marginBottom: 10 },
  moduloTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  moduloDuracao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  duracaoText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  topicosContainer: { marginBottom: 10 },
  topicoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bulletPoint: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#6B7280',
    marginTop: 6,
    marginRight: 8,
    flexShrink: 0,
  },
  topicoText: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 16,
    flex: 1,
  },
  comecarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  comecarText: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '600',
    marginLeft: 6,
  },
});
