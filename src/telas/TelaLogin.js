import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(true);
  const [lembrar, setLembrar] = useState(false);

  function entrar() {
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Lembrar:', lembrar);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
      <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoVoltar}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Acesse</Text>
      <Text style={styles.subtitulo}>com E-mail e senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputSenhaArea}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={mostrarSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text>{mostrarSenha ? '👁' : '🙈'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.opcoes}>
        <TouchableOpacity style={styles.checkboxArea} onPress={() => setLembrar(!lembrar)}>
          <View style={[styles.box, lembrar && styles.boxAtivo]} />
          <Text style={styles.textoOpcao}>Lembrar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.esqueciText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEntrar} onPress={entrar}>
        <Text style={styles.txtEntrar}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastrar} onPress={() => navigation.navigate('Cadastro')}>
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
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#E1E2E8',
    marginRight: 5,
  },
  boxAtivo: {
    backgroundColor: '#1FAE58',
  },
  textoOpcao: {
    fontSize: 12,
    color: '#8B8D98',
  },
  esqueciText: {
    fontSize: 12,
    color: '#1FAE58',
    fontWeight: 'bold',
  },
  btnEntrar: {
    backgroundColor: '#1FAE58',
    borderRadius: 0,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  txtEntrar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  btnCadastrar: {
    borderWidth: 1,
    borderColor: '#E1E2E8',
    borderRadius: 0,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  txtCadastrar: {
    color: '#1A1A1A',
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
});
