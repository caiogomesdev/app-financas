import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Loading = styled.Image`
  width: 90px;
  height: 90px;
`
