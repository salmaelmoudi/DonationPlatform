// frontend/src/navigation/RootNavigator.tsx
import React, { useContext } from 'react';
import AuthNavigator from './AuthNavigator';
import MainAppNavigator from './MainAppNavigator';
import { AuthContext } from '../context/AuthContext';

export default function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <MainAppNavigator /> : <AuthNavigator />;
}
