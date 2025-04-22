// frontend/src/context/AuthContext.tsx
import React, {
    createContext,
    useState,
    useEffect,
    ReactNode,
  } from 'react';
  import {
    User,
    onAuthStateChanged,
    signOut,
  } from 'firebase/auth';
  import { auth } from '../services/firebase';
  
  interface AuthContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => Promise<void>;
  }
  
  export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
    logout: async () => {},
  });
  
  export const AuthProvider = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (current) => {
        setUser(current);
      });
      return () => unsub();
    }, []);
  
    const logout = async () => {
      await signOut(auth);
      setUser(null);
    };
  
    return (
      <AuthContext.Provider value={{ user, setUser, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  