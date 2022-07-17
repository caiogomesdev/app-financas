import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 50px;
`

export const DateText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_700};
  font-size: 18px;
  margin-top: 15px;
`
