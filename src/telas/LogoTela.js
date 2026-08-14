import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

export default function LogoTela({ navigation }) {
  
  useEffect(() => {
    // espera 2 segundos e vai pra tela de inicio
    setTimeout(() => {
      navigation.navigate('Inicio');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1FAE58" />
      <Image
        source={require('./assets/logotipo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1FAE58',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 60,
  },
});
