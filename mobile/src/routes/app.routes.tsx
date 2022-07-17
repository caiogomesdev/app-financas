import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'styled-components/native';

import Home from '../views/Home';
import CustomDrawer from '../components/CustomDrawer';

const App: React.FC = () => {
  const drawer = createDrawerNavigator();
  const theme = useTheme();

  return(
    <drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: theme.COLORS.BACKGROUND_800,
          paddingTop: 174,
          alignItems: 'center',
          justifyContent: 'center',
        }
      }}
    >
      <drawer.Screen
      name='home'
      component={Home}
        options={{
          headerShown: false,
        }}
      />
    </drawer.Navigator>
  )
}

export default App;
