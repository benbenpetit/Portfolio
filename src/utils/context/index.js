import React, { createContext, useRef } from "react";

export const LoadingProvider = ({ children }) => {
  const loadingStateRef = useRef(null);

  return (
    <LoadingContext.Provider value={{ loadingStateRef }}>
      <div ref={loadingStateRef} className="js-loading-state">{children}</div>
    </LoadingContext.Provider>
  );
};

export const LoadingContext = createContext();
