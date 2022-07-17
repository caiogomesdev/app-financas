import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Container, DateText } from './styles';
import { financasToFinancasApp, FinancaApp  } from './helpers';
import { isDateToday } from '../../utils';
import { Financa } from '../../utils/dtos';
import Card from '../Card';

const App: React.FC = () => {
  const [financas, _setFinancas] = useState<Financa[]>([
    { isProfit: true, title: 'Frelancer', type: 'Servico', value: 500, date: new Date() },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date() },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-15T00:00') },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-15T00:00') },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-15T00:00') },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-15T00:00') },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-12T00:00') },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-12T00:00') },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-12T00:00') },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-12T00:00') },
  ]);

  const [ financasApp, setFinancasApp ] = useState<FinancaApp[]>([]);

  useEffect(() => {
    setFinancasApp(financasToFinancasApp(financas));
  }, [financas])

  return (
    <Container>
      <FlatList data={financasApp} renderItem={({ item, index }) => (
        <View>
          <DateText key={index}> {isDateToday(item.dateString) ? 'Hoje' : item.dateString} </DateText>
          <FlatList data={item.financas} renderItem={({ item, index }) =>
            <Card key={index} financa={item} />}
          />
        </View>
      )} />
    </Container>
  )
}

export default App;
