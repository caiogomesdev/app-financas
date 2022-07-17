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
} from './styles';
import { useTheme } from 'styled-components';
import { dateFullToString } from '../../utils';
import { textToPrice } from './helpers';

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isProfit: boolean;
}

const App: React.FC<Props> = ({ setOpenModal, isProfit }) => {
  const [ title, setTitle ] = useState('');
  const [ type, setType ] = useState('');
  const [ date, setDate ] = useState(dateFullToString(new Date()));
  const [ price, setPrice ] = useState('0,0');
  const theme = useTheme();


  function setNumberPrice(text: string) {
    const result = textToPrice(text);
    setPrice(result);
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
          <Input placeholder="Valor"
          keyboardType="numeric"
          placeholderTextColor={theme.COLORS.TEXT_800}
          value={date}
          onChangeText={(text) => setPrice(text)}
          small={true}
          />

          <Input placeholder="Valor"
            keyboardType="numeric"
            placeholderTextColor={theme.COLORS.TEXT_800}
            value={price}
            small={true}
            onChangeText={(text) => setNumberPrice(text)}
        />

        </BodyViewRow>

      </BodyView>


    </Container>
  )
}

export default App;
