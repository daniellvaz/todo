import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import Router from './src/router';
import AuthProvider from './src/context/AuthContext';
import Header from './src/components/Header';
import { SafeAreaView, StyleSheet } from 'react-native';
import { theme } from './src/style/theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={theme.colors.linearGradient}
      style={style.container}
    >
      <NavigationContainer>
        <AuthProvider>
          <StatusBar style="light"/>
          <Header />
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24
  }
})