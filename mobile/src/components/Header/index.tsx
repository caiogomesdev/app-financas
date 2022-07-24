import React, { useEffect, useState } from "react";
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
import { useHeaderHeight } from '@react-navigation/elements';
import { Modal, KeyboardAvoidingView, Platform } from "react-native";
import ModalCustos from '../ModalCustos';

import IconArrowUp from "../../assets/Arrow-circle-up.png";
import IconArrowDown from "../../assets/Arrow-circle-down.png";
import IconMenu from "../../assets/Menu.png";
import { numberToMoney } from "../../utils";

interface Params {
  priceTotal: number;
  updateFinancas: () => Promise<void>
}

const App: React.FC<Params> = ({ priceTotal, updateFinancas }) => {
  const navigation = useNavigation();
  const [ openModal, setOpenModal ] = useState(false);
  const [ profit, setProfit ] = useState(false);
  const headerHeight = useHeaderHeight();

  function openCloseModal(value: boolean, isProfit: boolean) {
    setProfit(isProfit);
    setOpenModal(value);
  }

  useEffect(() => {
    if (!openModal) {
      async function update(){
        await updateFinancas();
      }
      update();
    }
  }, [openModal])

  return (
    <Container>

      <Modal animationType="fade" visible={openModal} transparent={true}>
        <KeyboardAvoidingView style={
          {
            flex: 1, justifyContent: 'center',
            paddingHorizontal: 20,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }
          keyboardVerticalOffset={headerHeight}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ModalCustos setOpenModal={setOpenModal} isProfit={profit} />
        </KeyboardAvoidingView>
      </Modal>

      <MenuButton style={{ position: "absolute", left: 20, top: 60 }}
        onPress={() =>
          navigation.dispatch(DrawerActions.openDrawer())
        }>
        <MenuIcon source={IconMenu} />
      </MenuButton>

      <Group>
        <PriceText>{ numberToMoney(priceTotal) }</PriceText>
        <SaldoAtualText>Saldo atual</SaldoAtualText>
      </Group>

      <Group>
        <IconsGroup>
          <IconButton onPress={() => openCloseModal(true, true)} >
            <Icon source={IconArrowUp} />
            <IconText>Ganhou</IconText>
          </IconButton>
          <IconButton onPress={() => openCloseModal(true, false)}>
            <Icon source={IconArrowDown} />
            <IconText>Perdeu</IconText>
          </IconButton>
        </IconsGroup>
      </Group>
    </Container>
  );
};

export default App;
