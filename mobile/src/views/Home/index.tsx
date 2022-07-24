import React, { useEffect, useState } from 'react';
import { Container, Section } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import CardsContainer from '../../components/CardsContainer';
import { httpService } from '../../services';

const App: React.FC = () => {
  const [ priceTotal, setPriceTotal] = useState(0)
  useEffect(() => {
    init();
  }, []);

  async function init() {
    await getTotalPrices();
  }

  async function getTotalPrices(){
    const result = await httpService.getAllPricesRoute();
    setPriceTotal(result);
  }

  return (
    <Container>
      <Header priceTotal={ priceTotal }></Header>
      <Section>
        <Tabs />
        <CardsContainer />
      </Section>
    </Container>
  );
};

export default App;
