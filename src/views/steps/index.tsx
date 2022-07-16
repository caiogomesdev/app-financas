import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';
import { Container, ButtonLogin, ButtonCadastro, TextBtn } from './style';

const App: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <ButtonLogin>
        <TextBtn>Login</TextBtn>
      </ButtonLogin>
      <ButtonCadastro>
        <TextBtn>Cadastro</TextBtn>
      </ButtonCadastro>
    </Container>
  )
}

export default App;
