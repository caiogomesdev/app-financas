import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Container, DateText } from './styles';
import { financasToFinancasApp, FinancaApp  } from './helpers';
import { isDateToday } from '../../utils';
import { IFinancaDto } from '../../utils/dtos';
import Card from '../Card';

interface Params {
  financas: IFinancaDto[]
}
const App: React.FC<Params> = ({ financas }) => {
  const [ financasApp, setFinancasApp ] = useState<FinancaApp[]>([]);

  useEffect(() => {
    setFinancasApp(financasToFinancasApp(financas));
  }, [financas])

  return (
    <Container>
      <FlatList data={ financasApp } renderItem={({ item, index }) => (
        <View>
          <DateText isFirstItem={index === 0} isDateToday={isDateToday(item.dateString)}>
            {isDateToday(item.dateString) ? 'Hoje' : item.dateString} </DateText>
          <FlatList data={item.financas} renderItem={({ item }) =>
            <Card financa={item} />}
          />
        </View>
      )} />
    </Container>
  )
}

export default App;
