import styled from 'styled-components/native';

interface TabBtn {
  actived: boolean;
}

export const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px 20px;
  flex-direction: row;
`

export const Tab = styled.TouchableOpacity<TabBtn>`
  background-color: ${
  props => props.actived ?
    props.theme.COLORS.BACKGROUND_700 : props.theme.COLORS.BACKGROUND_600
  };
  margin-right: 10px;
  border-radius: 15px;
  padding: 5px 20px;
`

export const TabText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT_600}
`
