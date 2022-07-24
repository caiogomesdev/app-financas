import React from "react";
import { Financa } from "../../utils/dtos";
import { Container, Icon, Content, Group, TextBold, TextRegular } from './styles';

import IconArrowUp from "../../assets/Arrow-circle-up.png";
import IconArrowDown from "../../assets/Arrow-circle-down.png";
import { dateFullToString, numberToMoney } from "../../utils";

interface Props {
  financa: Financa;
}

const App: React.FC<Props> = ({ financa }) => {
  return (
    <Container>
      <Icon source={ financa.price >= 0 ? IconArrowUp : IconArrowDown} />
      <Content>
        <Group>
          <TextBold>{financa.title}</TextBold>
          <TextRegular>{financa.type}</TextRegular>
        </Group>
        <Group>
          <TextBold>{ financa.price >= 0 ? '+' : '-' } { numberToMoney(financa.price) }</TextBold>
          <TextRegular isRight={true}>{dateFullToString(financa.date)}</TextRegular>
        </Group>
      </Content>
    </Container>
  )
}

export default App;
