import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../views/Home';

const App: React.FC = () => {
  const stack = createNativeStackNavigator();
  return(
    <stack.Navigator>
      <stack.Screen name='home' component={Home}/>
    </stack.Navigator>
  )
}

export default App;
