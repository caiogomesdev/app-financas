import React, { createContext, useEffect, useState } from 'react';
import { httpService } from '../services';

interface IAuth {
  isLogged: boolean;
  user: IUser | null;
  logout: () => void;
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

  useEffect(() => {
    signInWithToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMmExOWIyZC1mMTkxLTRhODctYjAxOS00N2I5MDIyOTljNmUiLCJpYXQiOjE2NTg2MTUzNDksImV4cCI6MTY1ODc4ODE0OX0.WE1ii4sX2CKi20tMxTgi0Hnr9TH1yBnLFqMkPtR_H1Q');
  }, [])

  async function signInWithToken(token: string): Promise<void> {
    try {
      httpService.changeAcessToken(token);
      const result = await httpService.meRoute();
      setUser(result.data);
    } catch {
      setUser(null);
    }
  }

  async function signIn(body: ISignIn): Promise<void> {
    const result = await httpService.signinRoute(body);
    signInWithToken(result);
  }

  function logout(): void {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isLogged: !!user, user, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
