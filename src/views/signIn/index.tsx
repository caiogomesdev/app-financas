import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Container, Title, SubTitle, Button, TextButton, Group } from './style'
import Input from '../../components/Input';
import { useTheme } from 'styled-components/native';
import { firebase } from '../../services/firebase';

const App: React.FC = () => {
  const THEME = useTheme();
  const headerHeight = useHeaderHeight();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');

  return(
    <Container
    keyboardVerticalOffset={headerHeight}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Group>
        <Title>Bem vindo!</Title>
        <SubTitle>Faça o login para continuar</SubTitle>
      </Group>
      <Group>
          <Input textContentType='emailAddress'
          placeholder='Email'
          placeholderTextColor={ THEME.COLORS.TEXT_800 }
          value={ email }
          onChangeText={(text) => setEmail(text)}
          />
          <Input textContentType='password'
          secureTextEntry={ true }
          placeholder='Senha'
          placeholderTextColor={ THEME.COLORS.TEXT_800 }
          value={ password }
          onChangeText={(text) => setPassword(text)}
          />
          <Button><TextButton>Login</TextButton></Button>
      </Group>
      <Group></Group>

    </Container>
  )
}

export default App;
