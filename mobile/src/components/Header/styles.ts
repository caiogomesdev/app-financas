import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  height: 185px;
  padding: 20px 18px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Group = styled.View`
`;

export const IconsGroup = styled.View`
  flex-direction: row;
`

export const IconButton = styled.TouchableOpacity`
  margin-left: 10;
  justify-content: center;
  align-items: center;
`

export const IconText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  margin-top: 3px;
  font-size: 16px;
`

export const PriceText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  font-size: 32px;
  font-weight: bold;
`;

export const SaldoAtualText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_700};
  font-size: 22px;
`;

export const Icon = styled.Image`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 50%;
  width: 41.67;
  height: 41.67;
`;
