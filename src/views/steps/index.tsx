import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import { Container, ButtonLogin, ButtonCadastro, TextBtn } from './style';

const App: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={logo} />
      <ButtonLogin>
        <TextBtn onPress={() => navigation.navigate('login')}>Login</TextBtn>
      </ButtonLogin>
      <ButtonCadastro>
        <TextBtn  onPress={() => navigation.navigate('cadastro')}>Cadastro</TextBtn>
      </ButtonCadastro>
    </Container>
  )
}

export default App;
