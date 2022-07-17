import styled from 'styled-components/native';

interface TextRegularProps {
  isRight?: boolean;
}

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`

export const Icon = styled.Image`
  width: 50px;
  height:50px;
  margin-right: 15px;
`

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content:space-between;
`

export const TextBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT_600};
`

export const TextRegular = styled.Text<TextRegularProps>`
  font-size: 14px;
  margin-top: 5px;
  text-align: ${props => props.isRight ? 'right' : 'left'};
  color: ${({ theme }) => theme.COLORS.TEXT_600};
`

export const Group = styled.View`

`
