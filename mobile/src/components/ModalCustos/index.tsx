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
} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useTheme } from 'styled-components';
import { dateFullToString, stringToDate } from '../../utils';
import { textToPrice } from './helpers';
import { Platform } from 'react-native';

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
          display='spinner'
          onChange={(_data, dataDate) => changeCurrentDate(dataDate)}
        />}

      </BodyView>
      <PlusButton>
        <PlusText>+</PlusText>
      </PlusButton>
    </Container>
  )
}

export default App;
