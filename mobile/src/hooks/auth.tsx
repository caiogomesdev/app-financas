import React, { createContext, useState } from 'react';

interface AuthContext {
  isLogged: boolean;
  user: User | null;
}

interface SignIn {
  email: string,
  passWord: string,
}

interface User extends SignIn {
  name: string,
}

export const AuthContext = createContext<AuthContext | null>(null);
const AuthProvider: React.FC = ({ children }) => {
  const [ user, setUser ] = useState<User | null>(null);

  async function handleSignUp({ name, email, passWord }: User){
  }

  return(
    <AuthContext.Provider value={{ isLogged: !!user, user }}>
      {children}
    </AuthContext.Provider>

  )
}

export default AuthProvider;
