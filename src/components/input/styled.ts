import { TextInput } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

export const Input = styled.TextInput`
  font-size: 24px;
  padding: 7px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.TEXT_800};
  color: ${({ theme }) => theme.COLORS.TEXT_800};
  width: 100%;
  margin-bottom: 35px;
`
