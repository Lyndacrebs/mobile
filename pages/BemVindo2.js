import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BemVindo2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Bem-vindo</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('BemVindo3')}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#03dac5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 5,
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
