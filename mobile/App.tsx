import React from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/hooks/auth';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <AuthProvider>
        <StatusBar style="inverted" />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}

