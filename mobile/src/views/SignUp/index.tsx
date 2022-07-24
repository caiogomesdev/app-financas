import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { StatusBar } from 'expo-status-bar';
import { Container, Title, SubTitle, Button, TextButton, Group } from './style'
import Input from '../../components/Input';
import { useTheme } from 'styled-components/native'

const App: React.FC = () => {
  const THEME = useTheme();
  const headerHeight = useHeaderHeight();

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');

  return(
    <Container
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      <Group>
        <Title>Olá</Title>
        <SubTitle>Crie uma conta</SubTitle>
      </Group>
      <Group>
          <Input
          textContentType='nickname'
          placeholder='Usuário'
          placeholderTextColor={ THEME.COLORS.TEXT_800 }
          value={ username }
          onChangeText={(text) => setUsername(text)}
          autoCapitalize='words'
          />
          <Input
          textContentType='emailAddress'
          placeholder='Email'
          placeholderTextColor={ THEME.COLORS.TEXT_800 }
          value={ email }
          onChangeText={(text) => setEmail(text)}
          keyboardType='email-address'
          autoCapitalize='none'
          />
          <Input
          textContentType='password'
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor={ THEME.COLORS.TEXT_800 }
          value={ password }
          onChangeText={(text) => setPassword(text)}
          />
          <Button onPress={() => console.log('cadastrar')}>
            <TextButton>Cadastrar</TextButton>
          </Button>
      </Group>
      <Group></Group>

    </Container>
  )
}

export default App;
