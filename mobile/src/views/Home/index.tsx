import React, { useEffect, useState } from 'react';
import { Container, Section } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import CardsContainer from '../../components/CardsContainer';
import { httpService } from '../../services';
import { Financa } from '../../utils/dtos';

const App: React.FC = () => {
  const [ financas, setFinancas ] = useState<Financa[]>([]);
  const [ priceTotal, setPriceTotal] = useState(0)
  useEffect(() => {
    init();
  }, []);

  async function init() {
    await getFinancas();
    await getTotalPrices();
  }

  async function getTotalPrices(){
    const result = await httpService.getAllPricesRoute();
    setPriceTotal(result);
  }

  async function getFinancas() {
    const result = await httpService.getAllFinancasRoute();
    setFinancas(result)
  }

  return (
    <Container>
      <Header priceTotal={ priceTotal }></Header>
      <Section>
        <Tabs />
        <CardsContainer financas={ financas } />
      </Section>
    </Container>
  );
};

export default App;
