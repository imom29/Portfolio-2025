import React, { createContext, useContext } from 'react';
import { CursorGlowOptions } from '../hooks/useCursorGlow';

interface CursorGlowContextType {
  isEnabled: boolean;
  globalOptions: CursorGlowOptions;
}

const CursorGlowContext = createContext<CursorGlowContextType>({
  isEnabled: true,
  globalOptions: {}
});

export const CursorGlowProvider: React.FC<{
  children: React.ReactNode;
  enabled?: boolean;
  globalOptions?: CursorGlowOptions;
}> = ({ children, enabled = true, globalOptions = {} }) => {
  return (
    <CursorGlowContext.Provider value={{ isEnabled: enabled, globalOptions }}>
      {children}
      {/* Global cursor styles */}
    </CursorGlowContext.Provider>
  );
};