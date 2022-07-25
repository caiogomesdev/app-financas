import React, { useContext } from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import Loading from '../views/Loading';
import { AuthContext } from '../hooks/auth';

const App: React.FC = () => {
  const authContext = useContext(AuthContext);

  function init(): JSX.Element {
    if (authContext?.isLoading) {
      return <Loading />;
    }
    return authContext?.isLogged ? <AppRoutes /> : <AuthRoutes />;
  }

  return init()

}

export default App;
