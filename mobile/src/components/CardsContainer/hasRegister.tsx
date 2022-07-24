import React from 'react';
import { FlatList, View } from 'react-native';
import { Container, DateText } from './styles';
import { FinancaApp  } from './helpers';
import { isDateToday } from '../../utils';
import Card from '../Card';

interface Params {
  financasApp: FinancaApp[]
}
const App: React.FC<Params> = ({ financasApp }) => {
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
