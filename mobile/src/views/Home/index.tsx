import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

const App: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Tabs />
    </Container>
  );
};

export default App;
