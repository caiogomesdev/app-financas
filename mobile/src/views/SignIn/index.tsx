import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Container, Title, SubTitle, Button, TextButton, Group, ErrorView, ErrorText } from './style'
import Input from '../../components/Input';
import { useTheme } from 'styled-components/native';
import { AuthContext } from '../../hooks/auth';
import { AxiosError } from 'axios';

const App: React.FC = () => {
  const theme = useTheme();
  const authContext = useContext(AuthContext);
  const headerHeight = useHeaderHeight();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  async function signin() {
    try {
      await authContext?.signIn({ email, password });
    } catch (err) {
      const message = (err as AxiosError<any>).response?.data.message;
      setError(message)
    }
  }

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
          placeholderTextColor={ theme.COLORS.TEXT_800 }
          value={ email }
          onChangeText={(text) => setEmail(text)}
          keyboardType='email-address'
          autoCapitalize='none'
          />
          <Input textContentType='password'
          secureTextEntry={ true }
          placeholder='Senha'
          placeholderTextColor={ theme.COLORS.TEXT_800 }
          value={ password }
          onChangeText={(text) => setPassword(text)}
        />
          <ErrorView>
            <ErrorText>{ error }</ErrorText>
          </ErrorView>
        <Button onPress={() => signin()}><TextButton>Login</TextButton></Button>
      </Group>
      <Group></Group>

    </Container>
  )
}

export default App;
