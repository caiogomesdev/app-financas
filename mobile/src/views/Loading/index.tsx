import React from 'react';
import { Container, Loading } from './styles';
import LoadingGif from '../../assets/loader.gif';

export const App: React.FC = () => {
  return (
    <Container>
      <Loading source={LoadingGif} />
    </Container>
  )
}

export default App;
