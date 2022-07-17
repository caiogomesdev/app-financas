import React from "react";
import {
  Container,
  Group,
  PriceText,
  SaldoAtualText,
  Icon,
  IconsGroup,
  IconButton,
  IconText,
  MenuButton,
  MenuIcon
} from "./styles";
import { useNavigation, DrawerActions } from '@react-navigation/native';

import IconArrowUp from "../../assets/Arrow-circle-up.png";
import IconArrowDown from "../../assets/Arrow-circle-down.png";
import IconMenu from "../../assets/Menu.png";

const App: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <MenuButton style={{ position: "absolute", left: 20, top: 60 }}
        onPress={() =>
          navigation.dispatch(DrawerActions.openDrawer())
        }>
        <MenuIcon source={IconMenu} />
      </MenuButton>
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
