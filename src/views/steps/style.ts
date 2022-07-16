import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
  justify-content: center;
  align-items: center;
`

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  width: 80%;
  padding: 5px;
`

export const ButtonCadastro = styled.TouchableOpacity`
  border: solid 2px ${({ theme }) => theme.COLORS.BACKGROUND_800};
  width: 80%;
  padding: 5px;
  margin-top: 15px;
`

export const TextBtn = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT_800};
  text-align: center;
`
