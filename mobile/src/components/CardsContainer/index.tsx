import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Container, DateText } from './styles';
import { financasToFinancasApp, Financas, FinancasApp  } from './helpers';
import { isDateToday } from '../../utils';

const App: React.FC = () => {
  const [financas, _setFinancas] = useState<Financas[]>([
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-15T00:00') },
    { isProfit: false, title: 'Cursos programacao', type: 'Estudo', value: 200, date: new Date('2022-07-15T00:00') },
    { isProfit: true, title: 'Frelancer', type: 'Servico', value: 500, date: new Date() },
  ]);

  const [ financasApp, setFinancasApp ] = useState<FinancasApp[]>([]);

  useEffect(() => {
    setFinancasApp(financasToFinancasApp(financas));
  }, [financas])

  return (
    <Container>
      {
        financasApp.map(item => (
          <View>
            <DateText> {isDateToday(item.dateString) ? 'Hoje' : item.dateString} </DateText>
            {item.financas.map(financa => <Text style={{color: 'red'}}>{ financa.title }</Text>)}
          </View>
        ))
      }
    </Container>
  )
}

export default App;
