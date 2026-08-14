import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function InicioTela({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image
          source={require('./assets/welcome-illustration.png')}
          style={styles.imagem}
          resizeMode="contain"
        />
      </View>

      <View style={styles.baixo}>
        <Text style={styles.titulo}>Ótimo dia!</Text>
        <Text style={styles.subtitulo}>Como deseja acessar?</Text>

        <TouchableOpacity 
          style={styles.botaoGoogle}
          onPress={() => {
            alert('Login com Google em breve!');
          }}
        >
          <Image
            source={require('./assets/google-icon.png')}
            style={styles.iconeGoogle}
          />
          <Text style={styles.textoBotaoGoogle}>Como deseja acessar?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoOutros}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoOutros}>Outras opções</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topo: {
    height: '45%',
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: '80%',
    height: '80%',
  },
  baixo: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 15,
    color: '#8B8D98',
    marginBottom: 30,
  },
  botaoGoogle: {
    width: '100%',
    height: 50,
    backgroundColor: '#1FAE58',
    borderRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  iconeGoogle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textoBotaoGoogle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  botaoOutros: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E1E2E8',
  },
  textoOutros: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
