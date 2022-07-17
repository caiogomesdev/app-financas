import React from "react";
import {
  Container,
  Group,
  PriceText,
  SaldoAtualText,
  Icon,
  IconsGroup,
  IconButton,
  IconText
} from "./styles";

import IconArrowUp from "../../assets/Arrow-circle-up.png";
import IconArrowDown from "../../assets/Arrow-circle-down.png";

const App: React.FC = () => {
  return (
    <Container>
      <Group>
        <PriceText>R$ 100,00</PriceText>
        <SaldoAtualText>Saldo atual</SaldoAtualText>
      </Group>

      <Group>
        <IconsGroup>
          <IconButton>
            <Icon source={IconArrowUp} />
            <IconText>Ganhou</IconText>
          </IconButton>
          <IconButton>
            <Icon source={IconArrowDown} />
            <IconText>Perdeu</IconText>
          </IconButton>
        </IconsGroup>
      </Group>
    </Container>
  );
};

export default App;
