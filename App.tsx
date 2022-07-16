import React from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar style="inverted" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

