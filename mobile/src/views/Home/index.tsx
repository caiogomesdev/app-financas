import React from 'react';
import { Container, Section } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import CardsContainer from '../../components/CardsContainer';

const App: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Section>
        <Tabs />
        <CardsContainer />
      </Section>
    </Container>
  );
};

export default App;
