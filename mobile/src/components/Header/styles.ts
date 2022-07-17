import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  height: 185px;
  padding: 20px 18px;
  justify-content: center;
`;

export const Group = styled.View``;

export const Price = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  font-size: 32px;
  font-weight: bold;
`;
