import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Tela Inicial!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});