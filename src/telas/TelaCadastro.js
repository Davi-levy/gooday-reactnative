import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function TelaCadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [esconderSenha1, setEsconderSenha1] = useState(true);
  const [esconderSenha2, setEsconderSenha2] = useState(true);

  function cadastrar() {
    if (senha !== confirmarSenha) {
      Alert.alert('Aviso', 'As senhas não são iguais!');
    } else {
      Alert.alert('Sucesso', 'Cadastro realizado!');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
      <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoVoltar}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Cadastre-se</Text>
      <Text style={styles.subtitulo}>Informe seu E-mail e crie uma senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={(txt) => setEmail(txt)}
      />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputSenhaArea}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Crie uma senha"
          value={senha}
          onChangeText={(txt) => setSenha(txt)}
          secureTextEntry={esconderSenha1}
        />
        <TouchableOpacity onPress={() => setEsconderSenha1(!esconderSenha1)}>
          <Text>{esconderSenha1 ? '👁' : '🙈'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Repita a senha</Text>
      <View style={styles.inputSenhaArea}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Repita a senha"
          value={confirmarSenha}
          onChangeText={(txt) => setConfirmarSenha(txt)}
          secureTextEntry={esconderSenha2}
        />
        <TouchableOpacity onPress={() => setEsconderSenha2(!esconderSenha2)}>
          <Text>{esconderSenha2 ? '👁' : '🙈'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnCadastrar} onPress={cadastrar}>
        <Text style={styles.txtCadastrar}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.ouText}>Ou continue com</Text>

      <View style={styles.redesSociais}>
        <TouchableOpacity style={styles.circuloRede}>
          <Image source={require('./assets/google-icon.png')} style={styles.iconeRede} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circuloRede}>
          <Image source={require('./assets/facebook-icon.png')} style={styles.iconeRede} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnAcessar} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.txtAcessar}>
          Já tem uma conta? <Text style={{ color: '#1FAE58', fontWeight: 'bold' }}>Acesse</Text>
        </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 40,
  },
  btnVoltar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textoVoltar: {
    fontSize: 24,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
    color: '#8B8D98',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#8B8D98',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ECEDF3',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  inputSenhaArea: {
    flexDirection: 'row',
    backgroundColor: '#ECEDF3',
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  inputSenha: {
    flex: 1,
    paddingVertical: 12,
  },
  btnCadastrar: {
    backgroundColor: '#1FAE58',
    borderRadius: 0,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  txtCadastrar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  ouText: {
    textAlign: 'center',
    color: '#8B8D98',
    marginBottom: 15,
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  circuloRede: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  iconeRede: {
    width: 20,
    height: 20,
  },
  btnAcessar: {
    alignItems: 'center',
  },
  txtAcessar: {
    color: '#8B8D98',
  },
});
