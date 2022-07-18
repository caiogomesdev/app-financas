import styled from 'styled-components/native';

interface InputProps {
  small?: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding: 15px 30px;
  border-radius: 7px;
`

export const TitleText = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT_600};
`

export const CloseText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT_600};
`

export const CloseButton = styled.TouchableOpacity`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  padding: 5px;
`

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const BodyView = styled.View`
`

export const BodyViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Input = styled.TextInput<InputProps>`
  width: ${props => props.small ? '40%' : '100%'};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  padding: 6px 0px;
  border-radius: 2px;
  margin-top: 15px;
  `

export const PlusButton = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  padding: 5px 13px;
  margin-top: 15px;
`

export const PlusText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  font-size: 22px;
`
