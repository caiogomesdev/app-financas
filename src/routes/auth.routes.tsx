import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import Steps from '../views/steps';
import Login from '../views/login';
import Cadastro from '../views/cadastro';

const App: React.FC = () => {
  const stack = createNativeStackNavigator();
  const theme = useTheme();

  return(
    <stack.Navigator>
          <stack.Screen
            name='steps'
            component={Steps}
            options={ { headerShown: false}}/>
          <stack.Screen
            name='login'
            component={Login}
            options={ {
              title: '',
              headerStyle: {
                backgroundColor: theme.COLORS.BACKGROUND_900
              },
              headerTintColor: theme.COLORS.TEXT_800
            }}
           />
          <stack.Screen
            name='cadastro'
            component={Cadastro}
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
