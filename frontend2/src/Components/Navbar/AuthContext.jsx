// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(true);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };
  const values={
    refresh,
    setRefresh,
    setUser,
    user, login, logout
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
