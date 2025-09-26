import { useContext } from 'react';
import { CitiesContext } from '../contexts';

export function useCitiesContext() {
  const context = useContext(CitiesContext);

  if (context === undefined) {
    throw new Error('useCitiesContext must be used within a CitiesProvider');
  }

  return context;
}
