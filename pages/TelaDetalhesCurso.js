import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function TelaDetalhesCurso() {
  const navigation = useNavigation();

  // Exemplo de dados do curso atual (você pode fazer vir de outra tela por params depois)
  const cursoId = 1;
  const nomeCurso = 'Desenho Técnico Mecânico';
  const dataLimite = new Date('2025-12-18');
  const nomeAluno = 'Fulano'; // <- Substituir pelo nome do aluno logado

  const modulos = [
    { id: 1, titulo: 'Introdução ao Desenho Técnico', duracao: '22 horas', topicos: ['Conceitos básicos', 'Instrumentos de aplicação'], cor: '#E8F4FD' },
    { id: 2, titulo: 'Normas Técnicas e Padronização', duracao: '22 horas', topicos: ['ABNT NBR 10067', 'Escalas e montagem'], cor: '#F3E8FF' },
    { id: 3, titulo: 'Tipos de Linhas e Projeções', duracao: '22 horas', topicos: ['Linhas contínuas', 'Projeções ortogonais'], cor: '#FFF7ED' },
    { id: 4, titulo: 'Representação de Vistas', duracao: '22 horas', topicos: ['Vista frontal', 'Vista auxiliar'], cor: '#F0FDF4' },
  ];

  const handleInscricao = async () => {
    const hoje = new Date();
    let status = '';

    if (hoje > dataLimite) {
      status = 'Pendente';
    } else {
      status = 'Em andamento';
    }

    try {
      await axios.post('http://SEU_IP:3000/inscrever', {
        id_curso: cursoId,
        status: status,
        data_inscricao: hoje.toISOString().split('T')[0],
        nome_aluno: nomeAluno,
      });

      Alert.alert('Sucesso', 'Inscrição realizada com sucesso!');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível fazer a inscrição.');
    }
  };

  const ModuloCard = ({ modulo }) => (
    <View style={[styles.moduloCard, { backgroundColor: modulo.cor }]}>
      <Text style={styles.moduloTitulo}>{modulo.titulo}</Text>
      <View style={styles.moduloDuracao}>
        <Ionicons name="time-outline" size={16} color="#6B7280" />
        <Text style={styles.duracaoText}>{modulo.duracao}</Text>
      </View>
      <View style={styles.topicosContainer}>
        {modulo.topicos.map((topico, index) => (
          <View key={index} style={styles.topicoItem}>
            <View style={styles.bulletPoint} />
            <Text style={styles.topicoText}>{topico}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Botão Voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#7C3AED" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        {/* Nome do Curso */}
        <Text style={styles.cursoTitulo}>{nomeCurso}</Text>
        <Text style={styles.cursoDescricao}>
          Curso voltado para capacitar profissionais da indústria na interpretação de desenhos técnicos aplicados à fabricação de peças e equipamentos.
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

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: { padding: 5 },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 10 },
  cursoTitulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
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
});




// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   StatusBar,
//   Image,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// export default function TelaDetalhesCurso() {
//   const navigation = useNavigation();

//   const modulos = [
//     {
//       id: 1,
//       titulo: 'Introdução ao Desenho Técnico',
//       duracao: '22 horas',
//       topicos: [
//         'Conceitos básicos',
//         'Instrumentos e Aplicação da Indústria',
//       ],
//       cor: '#E8F4FD',
//     },
//     {
//       id: 2,
//       titulo: 'Normas Técnicas e Padronização',
//       duracao: '22 horas',
//       topicos: [
//         'ABNT NBR 10067, ISO 128',
//         'Escalas, dimensões e montagem',
//       ],
//       cor: '#F3E8FF',
//     },
//     {
//       id: 3,
//       titulo: 'Tipos de Linhas e Projeções',
//       duracao: '22 horas',
//       topicos: [
//         'Linhas contínuas, tracejadas, linha grossa',
//         'Projeções ortogonais',
//       ],
//       cor: '#FFF7ED',
//     },
//     {
//       id: 4,
//       titulo: 'Representação de Vistas',
//       duracao: '22 horas',
//       topicos: [
//         'Vistas frontal, lateral e superior',
//         'Vista auxiliar e corte',
//       ],
//       cor: '#F0FDF4',
//     },
//   ];

//   const ModuloCard = ({ modulo }) => (
//     <View style={[styles.moduloCard, { backgroundColor: modulo.cor }]}>
//       <View style={styles.moduloHeader}>
//         <Text style={styles.moduloTitulo}>{modulo.titulo}</Text>
//         <View style={styles.moduloDuracao}>
//           <Ionicons name="time-outline" size={16} color="#6B7280" />
//           <Text style={styles.duracaoText}>{modulo.duracao}</Text>
//         </View>
//       </View>

//       <View style={styles.topicosContainer}>
//         {modulo.topicos.map((topico, index) => (
//           <View key={index} style={styles.topicoItem}>
//             <View style={styles.bulletPoint} />
//             <Text style={styles.topicoText}>{topico}</Text>
//           </View>
//         ))}
//       </View>

//       <TouchableOpacity style={styles.comecarButton}>
//         <Ionicons name="play-circle" size={20} color="#8B5CF6" />
//         <Text style={styles.comecarText}>Começar</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       {/* Botão Voltar */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#7C3AED" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

//         {/* Nome do Curso */}
//         <Text style={styles.cursoTitulo}>Desenho Técnico Mecânico</Text>
//         <Text style={styles.cursoSubtitulo}>Por Internas.co Administração web</Text>

//         {/* Imagem */}
//         <View style={styles.cursoImageContainer}>
//           <View style={styles.imagePlaceholder}>
//             <Ionicons name="construct-outline" size={60} color="#9CA3AF" />
//           </View>
//         </View>

//         {/* Descrição */}
//         <Text style={styles.cursoDescricao}>
//           O curso tem como objetivo capacitar profissionais e estudantes da área industrial para interpretar,
//           elaborar e revisar desenhos técnicos aplicados à fabricação de peças e equipamentos mecânicos.
//           Abordando normas técnicas, tipos de linhas, projeções ortogonais, cotagem, tolerâncias,
//           engenharia, usinagem, manutenção e projetos industriais.
//         </Text>

//         {/* Seção Detalhes */}
//         <View style={styles.detalhesSection}>
//           <View style={styles.detalhesHeader}>
//             <Text style={styles.detalhesTitle}>Detalhes do curso</Text>
//             <View style={styles.duracaoTotal}>
//               <Ionicons name="time-outline" size={16} color="#6B7280" />
//               <Text style={styles.duracaoTotalText}>22 horas</Text>
//             </View>
//           </View>

//           {/* Grid de Módulos */}
//           <View style={styles.modulosGrid}>
//             {modulos.map((modulo) => (
//               <ModuloCard key={modulo.id} modulo={modulo} />
//             ))}
//           </View>
//         </View>

//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   backButton: {
//     padding: 5,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 10,
//   },
//   cursoTitulo: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#111827',
//     marginBottom: 6,
//   },
//   cursoSubtitulo: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginBottom: 20,
//   },
//   cursoImageContainer: {
//     marginBottom: 20,
//   },
//   imagePlaceholder: {
//     height: 200,
//     backgroundColor: '#F3F4F6',
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cursoDescricao: {
//     fontSize: 14,
//     color: '#374151',
//     lineHeight: 20,
//     marginBottom: 20,
//     textAlign: 'justify',
//   },
//   detalhesSection: {
//     marginBottom: 30,
//   },
//   detalhesHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   detalhesTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#111827',
//   },
//   duracaoTotal: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   duracaoTotalText: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginLeft: 4,
//   },
//   modulosGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   moduloCard: {
//     width: '48%',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//   },
//   moduloHeader: {
//     marginBottom: 10,
//   },
//   moduloTitulo: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//     marginBottom: 6,
//   },
//   moduloDuracao: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   duracaoText: {
//     fontSize: 12,
//     color: '#6B7280',
//     marginLeft: 4,
//   },
//   topicosContainer: {
//     marginBottom: 12,
//   },
//   topicoItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 4,
//   },
//   bulletPoint: {
//     width: 4,
//     height: 4,
//     borderRadius: 2,
//     backgroundColor: '#6B7280',
//     marginTop: 6,
//     marginRight: 8,
//     flexShrink: 0,
//   },
//   topicoText: {
//     fontSize: 12,
//     color: '#6B7280',
//     lineHeight: 16,
//     flex: 1,
//   },
//   comecarButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#8B5CF6',
//   },
//   comecarText: {
//     fontSize: 14,
//     color: '#8B5CF6',
//     fontWeight: '600',
//     marginLeft: 6,
//   },
// });



// // import React from 'react';
// // import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
// // import { useNavigation, useRoute } from '@react-navigation/native';
// // import { Ionicons } from '@expo/vector-icons';

// // export default function TelaDetalhesCurso() {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { curso } = route.params;

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
// //         <Ionicons name="arrow-back-outline" size={24} color="#6E6EFF" />
// //       </TouchableOpacity>

// //       <Text style={styles.titulo}>{curso.titulo}</Text>

// //       <Image source={curso.imagem} style={styles.imagem} resizeMode="contain" />

// //       <Text style={styles.texto}>Data limite {curso.DataLimite}</Text>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#FFFFFF', // Pra ficar todo branco
// //     paddingHorizontal: 16,
// //     paddingTop: 0,              // Tira qualquer padding extra
// //   },
// //   voltar: {
// //     marginTop: 50,
// //     marginBottom: 20,
// //   },
// //   titulo: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   imagem: {
// //     width: '100%',
// //     height: 150,
// //     borderRadius: 12,
// //     marginBottom: 10,
// //   },
// //   texto: {
// //     fontSize: 16,
// //   },
// // });
