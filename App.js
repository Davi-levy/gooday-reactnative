import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogoTela from './src/telas/LogoTela';
import InicioTela from './src/telas/InicioTela';
import TelaLogin from './src/telas/TelaLogin';
import TelaCadastro from './src/telas/TelaCadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logo" component={LogoTela} />
        <Stack.Screen name="Inicio" component={InicioTela} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
