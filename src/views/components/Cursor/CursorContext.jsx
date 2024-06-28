import React, { createContext, useState, useContext } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [isHoveringWhite, setIsHoveringWhite] = useState(false);

  return (
    <CursorContext.Provider value={{ isHoveringWhite, setIsHoveringWhite }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);