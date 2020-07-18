import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useToast } from './toast';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

interface AuthData {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const [authData, setAuthData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@Domo:token');
    const user = localStorage.getItem('@Domo:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post('/auth/sign_in', {
        email,
        password,
      });

      const user = response.data.data;
      const token = response.headers['access-token'];

      if (!token || !user) {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credênciais.',
        });
      }

      localStorage.setItem('@Domo:token', token);
      localStorage.setItem('@Domo:user', JSON.stringify(user));

      setAuthData({ token, user });
    },
    [addToast],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Domo:token');
    localStorage.removeItem('@Domo:token');

    setAuthData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
