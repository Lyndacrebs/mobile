import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function TelaEditarNome() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const [showNameModal, setShowNameModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showSenhaModal, setShowSenhaModal] = useState(false);

  const [userName, setUserName] = useState('Fulano');
  const [userEmail, setUserEmail] = useState('fulano@exemplo.com');
  const [userSenha, setUserSenha] = useState('123456');

  const [tempUserName, setTempUserName] = useState(userName);
  const [tempUserEmail, setTempUserEmail] = useState(userEmail);
  const [tempUserSenha, setTempUserSenha] = useState(userSenha);

  const handleBack = () => {
    navigation.goBack();
  };

  const openModal = (type) => {
    if (type === 'nome') {
      setTempUserName(userName);
      setShowNameModal(true);
    } else if (type === 'email') {
      setTempUserEmail(userEmail);
      setShowEmailModal(true);
    } else if (type === 'senha') {
      setTempUserSenha(userSenha);
      setShowSenhaModal(true);
    }
  };

  const salvarNome = () => {
    if (tempUserName.trim() === '') {
      Alert.alert('Erro', 'Nome não pode estar vazio');
      return;
    }
    setUserName(tempUserName);
    setShowNameModal(false);
  };

  const salvarEmail = () => {
    if (tempUserEmail.trim() === '') {
      Alert.alert('Erro', 'E-mail não pode estar vazio');
      return;
    }
    setUserEmail(tempUserEmail);
    setShowEmailModal(false);
  };

  const salvarSenha = () => {
    if (tempUserSenha.trim().length < 6) {
      Alert.alert('Erro', 'Senha precisa ter pelo menos 6 caracteres');
      return;
    }
    setUserSenha(tempUserSenha);
    setShowSenhaModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Editar perfil</Text>
      </View>

      {/* Conteúdo do Perfil */}
      <View style={styles.content}>
        <View style={styles.profilePictureContainer}>
          <Image source={require('../assets/foto_perfil.png')} style={styles.usuario} resizeMode="contain" />
        </View>

        <View style={styles.infoContainer}>
          {/* Nome */}
          <TouchableOpacity style={styles.infoItem} onPress={() => openModal('nome')}>
            <View>
              <Text style={styles.infoLabel}>Nome de usuário</Text>
              <Text style={styles.infoValue}>{userName}</Text>
            </View>
            <Icon name="edit" size={20} color="#666" />
          </TouchableOpacity>

          {/* Email */}
          <TouchableOpacity style={styles.infoItem} onPress={() => openModal('email')}>
            <View>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{userEmail}</Text>
            </View>
            <Icon name="edit" size={20} color="#666" />
          </TouchableOpacity>

          {/* Senha */}
          <TouchableOpacity style={[styles.infoItem, styles.lastInfoItem]} onPress={() => openModal('senha')}>
            <View>
              <Text style={styles.infoLabel}>Senha</Text>
              <Text style={styles.infoValue}>••••••••</Text>
            </View>
            <Icon name="edit" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* MODAL NOME */}
      <Modal visible={showNameModal} transparent animationType="slide" onRequestClose={() => setShowNameModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Nome</Text>
            <TextInput
              style={styles.textInput}
              value={tempUserName}
              onChangeText={setTempUserName}
              placeholder="Digite seu nome"
              autoFocus
            />
            <TouchableOpacity style={styles.saveButton} onPress={salvarNome}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL EMAIL */}
      <Modal visible={showEmailModal} transparent animationType="slide" onRequestClose={() => setShowEmailModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Email</Text>
            <TextInput
              style={styles.textInput}
              value={tempUserEmail}
              onChangeText={setTempUserEmail}
              placeholder="Digite seu email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.saveButton} onPress={salvarEmail}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL SENHA */}
      <Modal visible={showSenhaModal} transparent animationType="slide" onRequestClose={() => setShowSenhaModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Senha</Text>
            <TextInput
              style={styles.textInput}
              value={tempUserSenha}
              onChangeText={setTempUserSenha}
              placeholder="Digite nova senha"
              secureTextEntry
            />
            <TouchableOpacity style={styles.saveButton} onPress={salvarSenha}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    marginTop: 50
  },
  backButton: { marginRight: 16, padding: 4 },
  title: { fontSize: 18, fontWeight: '600', color: '#333',  fontFamily: 'Poppins_600SemiBold' },
  usuario: { width: 55, height: 55 },
  content: { flex: 1, paddingTop: 32 },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  infoContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastInfoItem: { borderBottomWidth: 0 },
  infoLabel: { fontSize: 14, color: '#666', marginBottom: 4 },
  infoValue: { fontSize: 16, color: '#333', fontWeight: '500' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    minHeight: 200,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
     fontFamily: 'Poppins_400Regular',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  textInput: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 32,
    paddingVertical: 8,
  },
  saveButton: {
    backgroundColor: '#E3E3E3',
    borderRadius: 70,
    paddingVertical: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '500',
    color: '#A6A6A6',
  },
});



// import React, { useState } from 'react';
// import {
//   View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar,
//   Modal, TextInput, Image, Alert
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { useUser } from '../context/UserContext';

// export default function TelaEditarNome() {
//   const navigation = useNavigation();
//   const baseURL = 'http://192.168.1.13:3000'; // seu IP local
//   const { userName, setUserName, userEmail, setUserEmail } = useUser();

//   const [modal, setModal] = useState({ tipo: null, visivel: false });
//   const [inputTemp, setInputTemp] = useState('');
//   const [novaSenha, setNovaSenha] = useState('');
//   const [senhaAtual, setSenhaAtual] = useState('');

//   const abrirModal = (tipo) => {
//     setInputTemp(tipo === 'nome' ? userName : userEmail);
//     setModal({ tipo, visivel: true });
//   };

//   const fecharModal = () => setModal({ tipo: null, visivel: false });

//   const salvarAlteracao = async () => {
//     if (inputTemp.trim() === '') {
//       Alert.alert('Erro', 'O campo não pode estar vazio');
//       return;
//     }

//     try {
//       const dadosAtualizados = {
//         nome_aluno: modal.tipo === 'nome' ? inputTemp : userName,
//         email: modal.tipo === 'email' ? inputTemp : userEmail,
//         senha: modal.tipo === 'senha' ? novaSenha : senhaAtual
//       };

//       const res = await axios.put(`${baseURL}/editar-aluno/${userEmail}`, dadosAtualizados);

//       if (modal.tipo === 'nome') setUserName(inputTemp);
//       if (modal.tipo === 'email') setUserEmail(inputTemp);

//       Alert.alert('Sucesso', res.data.mensagem);
//       fecharModal();
//     } catch (erro) {
//       console.error(erro);
//       Alert.alert('Erro', 'Não foi possível salvar as alterações');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Editar perfil</Text>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.profilePictureContainer}>
//           <Image source={require('../assets/foto_perfil.png')} style={styles.usuario} resizeMode="contain" />
//         </View>

//         <View style={styles.infoContainer}>
//           <TouchableOpacity style={styles.infoItem} onPress={() => abrirModal('nome')}>
//             <View>
//               <Text style={styles.infoLabel}>Nome de usuário</Text>
//               <Text style={styles.infoValue}>{userName}</Text>
//             </View>
//             <Icon name="edit" size={20} color="#666" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.infoItem} onPress={() => abrirModal('email')}>
//             <View>
//               <Text style={styles.infoLabel}>Email</Text>
//               <Text style={styles.infoValue}>{userEmail}</Text>
//             </View>
//             <Icon name="edit" size={20} color="#666" />
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.infoItem, styles.lastInfoItem]} onPress={() => abrirModal('senha')}>
//             <View>
//               <Text style={styles.infoLabel}>Senha</Text>
//               <Text style={styles.infoValue}>••••••••</Text>
//             </View>
//             <Icon name="edit" size={20} color="#666" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Modal */}
//       <Modal visible={modal.visivel} transparent animationType="slide">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>
//               {modal.tipo === 'nome' && 'Editar Nome de usuário'}
//               {modal.tipo === 'email' && 'Editar Email'}
//               {modal.tipo === 'senha' && 'Editar Senha'}
//             </Text>

//             {modal.tipo !== 'senha' ? (
//               <TextInput
//                 style={styles.textInput}
//                 value={inputTemp}
//                 onChangeText={setInputTemp}
//                 placeholder="Digite aqui"
//                 autoFocus
//               />
//             ) : (
//               <>
//                 <TextInput
//                   style={styles.textInput}
//                   secureTextEntry
//                   placeholder="Nova senha"
//                   value={novaSenha}
//                   onChangeText={setNovaSenha}
//                 />
//                 <TextInput
//                   style={styles.textInput}
//                   secureTextEntry
//                   placeholder="Confirme a senha atual"
//                   value={senhaAtual}
//                   onChangeText={setSenhaAtual}
//                 />
//               </>
//             )}

//             <TouchableOpacity style={styles.saveButton} onPress={salvarAlteracao}>
//               <Text style={styles.saveButtonText}>Salvar</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={fecharModal} style={{ marginTop: 10, alignItems: 'center' }}>
//               <Text style={{ color: '#999' }}>Cancelar</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// }
