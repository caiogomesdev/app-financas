import React, { useEffect, useState } from 'react';
import {
  Container,
  TitleText,
  HeaderView,
  CloseText,
  CloseButton,
  BodyView,
  Input,
  BodyViewRow,
  PlusButton,
  PlusText,
  AddText,
} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useTheme } from 'styled-components';
import { dateFullToString, stringToDate } from '../../utils';
import { priceStringToNumber, textToPrice } from './helpers';
import { Platform } from 'react-native';
import { httpService } from '../../services';

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isProfit: boolean;
}

const App: React.FC<Props> = ({ setOpenModal, isProfit }) => {
  const [ title, setTitle ] = useState('');
  const [ type, setType ] = useState('');
  const [ date, setDate ] = useState(dateFullToString(new Date()));
  const [ openDatePicker, setOpenDatePicker ] = useState(false);
  const [ price, setPrice ] = useState('0,0');
  const theme = useTheme();

  function setNumberPrice(text: string) {
    const result = textToPrice(text);
    setPrice(result);
  }

  function changeCurrentDate(dataDate: Date | undefined) {
    dataDate && setDate(dateFullToString(dataDate));
    setOpenDatePicker(Platform.OS === "ios" ? true : false);
  }

  async function submit() {
    try {
      await httpService.createFinancaRoute({
        title,
        type,
        date: stringToDate(date).toISOString(),
        price: isProfit ? priceStringToNumber(price) : priceStringToNumber(price) * -1
      })
      setOpenModal(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <HeaderView>
        <TitleText>{isProfit ? 'Ganhou' : 'Perdeu'}</TitleText>
        <CloseButton onPress={() => setOpenModal(false)}>
          <CloseText>X</CloseText>
        </CloseButton>
      </HeaderView>
      <BodyView>
        <Input placeholder="Titulo"
          placeholderTextColor={theme.COLORS.TEXT_800}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Input placeholder="Tipo"
          placeholderTextColor={theme.COLORS.TEXT_800}
          value={type}
          onChangeText={(text) => setType(text)}
        />
        <BodyViewRow>
          <Input placeholder="Date"
            showSoftInputOnFocus={false}
            placeholderTextColor={theme.COLORS.TEXT_800}
            value={date}
            onChangeText={(text) => setDate(text)}
            onFocus={() => setOpenDatePicker(true)}
            onBlur={() => setOpenDatePicker(false)}
          small={true}
          />
          <Input placeholder="Price"
            keyboardType="numeric"
            placeholderTextColor={theme.COLORS.TEXT_800}
            value={price}
            small={true}
            onChangeText={(text) => setNumberPrice(text)}
        />

        </BodyViewRow>

        { openDatePicker && <DateTimePicker
          value={stringToDate(date)}
          mode='date'
          display={Platform.OS === 'ios' ? 'spinner' : 'default' }
          onChange={(_data, dataDate) => changeCurrentDate(dataDate)}
        />}

      </BodyView>
      <PlusButton onPress={() => submit()}>
        <PlusText>+</PlusText>
        <AddText>Adicionar</AddText>
      </PlusButton>
    </Container>
  )
}

export default App;
