import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface GlobalContextType {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  value: 0,
  setValue: () => {}
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context.value && context.value !== 0) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }

  return context;
}