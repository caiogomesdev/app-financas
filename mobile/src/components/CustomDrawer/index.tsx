import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import Profile from '../../assets/profile.png';
import { ProfileImage, TextBold, TextRegular, Button } from './styles';
import { AuthContext } from '../../hooks/auth';
import { View } from 'react-native';
const App: React.FC<DrawerContentComponentProps> = (props) => {
  const user = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
        <ProfileImage source={Profile} />
      <Button>
        <TextBold>{user?.user?.name}</TextBold>
      </Button>
      <Button>
        <TextRegular>Sair</TextRegular>
      </Button>
    </DrawerContentScrollView>
  )
}

export default App;
