import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import Steps from '../views/Steps';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

const App: React.FC = () => {
  const stack = createNativeStackNavigator();
  const theme = useTheme();

  return(
    <stack.Navigator>
          <stack.Screen
            name='steps'
            component={ Steps }
            options={ { headerShown: false }}/>
          <stack.Screen
            name='SignIn'
            component={ SignIn }
            options={ {
              title: '',
              headerStyle: {
                backgroundColor: theme.COLORS.BACKGROUND_900,
              },
              headerTintColor: theme.COLORS.TEXT_800,

            }}
           />
          <stack.Screen
            name='SignUp'
            component={ SignUp }
            options={ {
              title: '',
              headerStyle: {
                backgroundColor: theme.COLORS.BACKGROUND_900
              },
              headerTintColor: theme.COLORS.TEXT_800
            }}
          />
    </stack.Navigator>
  )
}

export default App;
