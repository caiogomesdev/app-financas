import { ThemeProvider } from 'styled-components';
import { THEME } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Steps from './src/views/steps';
import Login from './src/views/login';
import Cadastro from './src/views/cadastro';

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='steps' component={Steps} options={ { headerShown: false}}/>
          <stack.Screen name='login' key='login' component={Login} options={ {
            title: '',
            headerStyle: {
              backgroundColor: THEME.COLORS.BACKGROUND_900
            },
            headerTintColor: THEME.COLORS.TEXT_800
           }}/>
          <stack.Screen name='cadastro' component={Cadastro} />
        </stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

