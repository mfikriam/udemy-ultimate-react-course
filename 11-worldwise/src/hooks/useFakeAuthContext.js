import { useContext } from 'react';
import { FakeAuthContext } from '../contexts';

export function useFakeAuthContext() {
  const context = useContext(FakeAuthContext);

  if (!context) {
    throw new Error('useFakeAuthContext must be used within a FakeAuthProvider');
  }

  return context;
}
