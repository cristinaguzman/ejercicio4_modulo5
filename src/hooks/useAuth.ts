import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
