import React, { createContext, useState } from 'react';

interface IAuth {
  isLogged: boolean;
  user: IUser | null;
}

interface SignIn {
  email: string,
  passWord: string,
}

interface IUser extends SignIn {
  name: string,
}

export const AuthContext = createContext<IAuth | null>(null);
const AuthProvider: React.FC = ({ children }) => {
  const [ user, setUser ] = useState<IUser | null>(null);

  async function handleSignUp({ name, email, passWord }: IUser){
  }

  return(
    <AuthContext.Provider value={{ isLogged: !!user, user }}>
      {children}
    </AuthContext.Provider>

  )
}

export default AuthProvider;
