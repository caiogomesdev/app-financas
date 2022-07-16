import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Title, SubTitle, Button, TextButton, Group } from './style'
import Input from '../../components/input';
import { useTheme } from 'styled-components/native';

const App: React.FC = () => {
  const THEME = useTheme();
  return(
    <Container>
      <StatusBar style="auto" />
      <Group>
        <Title>Bem vindo!</Title>
        <SubTitle>Faça o login para continuar</SubTitle>
      </Group>
      <Group>
          <Input textContentType='emailAddress'
          placeholder='Email'
          placeholderTextColor={ THEME.COLORS.TEXT_800 }
          />
          <Input textContentType='password'
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor={ THEME.COLORS.TEXT_800 }
          />
          <Button><TextButton>Login</TextButton></Button>
      </Group>
      <Group></Group>

    </Container>
  )
}

export default App;
