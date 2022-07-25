import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import Profile from '../../assets/profile.png';
import { ProfileImage, TextBold, TextRegular, Button } from './styles';
import { AuthContext } from '../../hooks/auth';

const App: React.FC<DrawerContentComponentProps> = (props) => {
  const authContext = useContext(AuthContext);

  async function logout() {
    await authContext?.logout();
  }

  return (
    <DrawerContentScrollView {...props}>
        <ProfileImage source={Profile} />
      <Button>
        <TextBold>{authContext?.user?.name}</TextBold>
      </Button>
      <Button onPress={() => logout()}>
        <TextRegular>Sair</TextRegular>
      </Button>
    </DrawerContentScrollView>
  )
}

export default App;
