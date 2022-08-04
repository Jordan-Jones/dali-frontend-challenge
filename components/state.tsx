import { createContext, useContext } from 'react';
import { PersonType } from '@components/pfp';
import studentData from '../pages/api/DALI_Data.json';

type ContextType = {
  data: PersonType[];
};

interface ContextProviderProps {
  children: React.ReactNode;
}

const AppContextDefault: ContextType = {
  data: [],
};

const AppContext = createContext<ContextType>(AppContextDefault);

export function AppWrapper({ children }: ContextProviderProps): JSX.Element {
  let sharedState = {
    data: studentData,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
