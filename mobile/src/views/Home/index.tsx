import React, { useEffect, useState } from 'react';
import { Container, Section } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import CardsContainer from '../../components/CardsContainer';
import { httpService } from '../../services';
import { Financa } from '../../utils/dtos';
import { FilterEnum } from '../../utils/enums';

const App: React.FC = () => {
  const [financas, setFinancas] = useState<Financa[]>([]);
  const [filter, setFilter] = useState(FilterEnum.ALL);
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    getFinancasWithFilter();
  }, [filter])

  async function init() {
    await getTotalPrices();
  }

  async function getTotalPrices(){
    const result = await httpService.getAllPricesRoute();
    setPriceTotal(result);
  }

  async function getFinancasWithFilter() {
    if (filter === FilterEnum.ALL) {
      await getAllFinancas();
      return;
    }
    const result = await httpService.getAllFinancasFilterRoute(filter);
    setFinancas(result);
  }

  async function getAllFinancas() {
    const result = await httpService.getAllFinancasRoute();
    setFinancas(result)
  }

  return (
    <Container>
      <Header priceTotal={ priceTotal }></Header>
      <Section>
        <Tabs filter={filter} setFilter={ setFilter } />
        <CardsContainer financas={ financas } />
      </Section>
    </Container>
  );
};

export default App;
