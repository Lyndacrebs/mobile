import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function TelaCadastro() {
  const [nome_aluno, setNomeAluno] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const baseURL = 'http://10.136.23.84:3000';

  const navigation = useNavigation();


  const handleCadastro = async () => {
    if (!agreedToTerms) {
      Alert.alert('Atenção', 'Você precisa concordar com os Termos & Condições');
      return;
    }

    if (!nome_aluno || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    try {
      const resposta = await axios.post(`${baseURL}/cadastro`, {
        nome_aluno,
        email,
        senha,
        foto_perfil: null
      });

      Alert.alert('Sucesso', resposta.data.mensagem);
      setNomeAluno('');
      setEmail('');
      setSenha('');
      setAgreedToTerms(false);
    } catch (erro) {
      Alert.alert('Erro', erro.response?.data?.erro || 'Erro ao cadastrar');
    }
  };

  let [fontsLoaded] = useFonts({
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold
});

if (!fontsLoaded) {
  return <AppLoading />;
}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
  <Image
    source={require('../assets/logo.png')} // coloque sua logo aqui
    style={styles.logo}
    resizeMode="contain"
  />
</View>
      <View style={styles.card}>
        <Text style={styles.title}>Crie uma Conta</Text>
        <Text style={styles.subtitle}>
          preencha suas informações abaixo ou{"\n"}registre-se com sua conta social
        </Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={nome_aluno}
          onChangeText={setNomeAluno}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.passwordInput}
            placeholder=""
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#555" />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={agreedToTerms}
            onValueChange={setAgreedToTerms}
            color={agreedToTerms ? '#7c3aed' : undefined}
          />
          <Text style={styles.checkboxLabel}>
            Concordo com os <Text style={styles.termsLink}>Termos & Condições</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={async () => {await handleCadastro();
        navigation.navigate('RotaInterna');}}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Ou cadastre-se com</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={22} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={22} color="#1877F2" />
          </TouchableOpacity>
        </View>

        <Text style={styles.loginText}>
          Já possui uma conta?{' '}
         <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
        <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24
  },
  card: {
    padding: 16
  },
  logoContainer: {
  alignItems: 'flex-end',
  marginBottom: 20
},
logo: {
  width: 50,
  height: 50
},
 title: {
  fontSize: 22,
  fontFamily: 'Poppins_600SemiBold',
  textAlign: 'center',
  marginBottom: 4
},
subtitle: {
  textAlign: 'center',
  color: '#6B7280',
  fontSize: 16,
  fontFamily: 'Poppins_300Light', // Fonte leve
  marginBottom: 24
},
  label: {
    color: '#111827',
    fontSize: 16,
    marginBottom: 6
  },
input: {
  backgroundColor: '#EEF2FF',
  borderRadius: 12,
  padding: 12,
  marginBottom: 16,
  fontFamily: 'Poppins_400Regular'
},
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 24
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#6B7280'
  },
  termsLink: {
    color: '#7c3aed',
    textDecorationLine: 'underline'
  },
  button: {
    backgroundColor: '#7c3aed',
    padding: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 24
  },
buttonText: {
  color: '#fff',
  fontFamily: 'Poppins_600SemiBold',
  fontSize: 16
},
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB'
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#C7C7C7',
    fontSize: 12
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 16
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6B7280'
  },
  loginLink: {
    color: '#3B82F6',
    textDecorationLine: 'underline'
  }
});
