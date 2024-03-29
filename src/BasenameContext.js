import React, { createContext, useContext, useState } from 'react';

const BasenameContext = createContext();

export const BasenameProvider = ({ children }) => {
  const [basename, setBasename] = useState('/');

  return (
    <BasenameContext.Provider value={{ basename }}>
      {children}
    </BasenameContext.Provider>
  );
};

export const useBasename = () => useContext(BasenameContext);