import { useState, createContext } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, isLoaded, setIsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
