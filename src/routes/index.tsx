import React, { useContext } from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../hooks/auth';

const App: React.FC = () => {
  const authContext = useContext(AuthContext);

  return authContext?.isLogged ? <AppRoutes /> : <AuthRoutes />
}

export default App;
