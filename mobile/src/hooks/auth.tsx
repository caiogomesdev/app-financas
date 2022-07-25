import React, { createContext, useEffect, useState } from 'react';
import { cacheService, httpService } from '../services';

interface IAuth {
  isLogged: boolean;
  isLoading: boolean;
  user: IUser | null;
  logout: () => Promise<void>;
  signIn: (login: ISignIn) => Promise<void>;
}

export interface ISignIn {
  email: string,
  password: string,
}

export interface IUser extends ISignIn {
  name: string,
}

export const AuthContext = createContext<IAuth | null>(null);
const AuthProvider: React.FC = ({ children }) => {
  const [ user, setUser ] = useState<IUser | null>(null);
  const [ loading, seLoading ] = useState<boolean>(true);

  useEffect(() => {
    init();
  }, [])

  async function init() {
    const token = await cacheService.loadToken();
    if (token) {
      await signInWithToken(token);
    }
    seLoading(false);
  }

  async function signInWithToken(token: string): Promise<void> {
    try {
      httpService.changeAcessToken(token);
      const result = await httpService.meRoute();
      setUser(result.data);
      await cacheService.setToken(token);
    } catch {
      setUser(null);
    }
  }

  async function signIn(body: ISignIn): Promise<void> {
    const result = await httpService.signinRoute(body);
    signInWithToken(result);
  }

  async function logout(): Promise<void> {
    setUser(null)
    await cacheService.removeToken();
  }

  return (
    <AuthContext.Provider value={{ isLogged: !!user, isLoading: loading, user, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
