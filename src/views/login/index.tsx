import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { Container } from './style'

const App: React.FC = () => {
  return(
    <Container>
      <StatusBar style="auto" />
      <Text>HELLO LOGIN COMPONENT</Text>
    </Container>
  )
}

export default App;
