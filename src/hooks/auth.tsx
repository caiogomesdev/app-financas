import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider: React.FC = ({ children }) => {
  const [ user, setUser ] = useState({
    nome: 'caio'
  });

  return(
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>

  )
}

export default AuthProvider;
