import styled from 'styled-components/native';

interface DateTextProps {
  isDateToday: boolean;
  isFirstItem: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding-bottom: 50px;
`

export const TextNoRegister = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_900};
  align-self: center;
  font-size: 16px;
`

export const DateText = styled.Text<DateTextProps>`
  color: ${({ theme }) => theme.COLORS.TEXT_700};
  font-size: 18px;
  margin-top: ${props => props.isFirstItem ? '0px' : '15px'};
  font-weight: ${props => props.isDateToday ? 'bold' : '400'};
`
