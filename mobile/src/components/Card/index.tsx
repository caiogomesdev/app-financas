import React from "react";
import { Financa } from "../../utils/dtos";
import { Container, Icon, Content, Group, TextBold, TextRegular } from './styles';

import IconArrowUp from "../../assets/Arrow-circle-up.png";
import IconArrowDown from "../../assets/Arrow-circle-down.png";
import { dateFullToString } from "../../utils";

interface Props {
  financa: Financa;
}

const App: React.FC<Props> = ({ financa }) => {

  function numberToMoney(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return (
    <Container>
      <Icon source={ financa.isProfit ? IconArrowUp : IconArrowDown} />
      <Content>
        <Group>
          <TextBold>{financa.title}</TextBold>
          <TextRegular>{financa.type}</TextRegular>
        </Group>
        <Group>
          <TextBold>{ financa.isProfit ? '+' : '-' } { numberToMoney(financa.value) }</TextBold>
          <TextRegular isRight={true}>{dateFullToString(financa.date)}</TextRegular>
        </Group>
      </Content>
    </Container>
  )
}

export default App;
