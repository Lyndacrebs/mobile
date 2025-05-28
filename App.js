import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function TelaCadastro() {
  // Consts de cadastro
  const [nome_aluno, setNomeAluno] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const baseURL = 'http://10.136.23.84:3000'; // Substitua pelo IP local do seu backend

  const handleCadastro = async () => {
    try {
      const resposta = await axios.post(`${baseURL}/cadastro`, {
        nome_aluno,
        email,
        senha
      });

      Alert.alert('Sucesso', resposta.data.mensagem);
      // Redirecionar ou limpar campos, se quiser
    } catch (erro) {
      console.error(erro.response?.data || erro.message);
      Alert.alert('Erro', erro.response?.data?.erro || 'Erro ao cadastrar');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome_aluno}
        onChangeText={setNomeAluno}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {/* Se quiser usar foto depois, pode adicionar aqui */}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15
  }
});
