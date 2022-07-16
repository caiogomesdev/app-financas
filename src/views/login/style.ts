import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 20px;
  justify-content: space-evenly;
  `

export const Group = styled.View`
  width: 100%;
  align-items: center;
`

export const Title = styled.Text`
  letter-spacing: 3px;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT_800};
`

export const SubTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT_900};
`

export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  padding: 10px;
  width: 120px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const TextButton = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT_800};
`
