import styled from 'styled-components/native';

export const ProfileImage = styled.Image`
  border-radius: 50px;
  margin-bottom: 10px;
  align-self: center;
`

export const TextBold = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  font-size: 22px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
`

export const TextRegular = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  font-size: 22px;
  margin-top: 15px;
  text-align: center;
`

export const Button = styled.TouchableOpacity`

`

