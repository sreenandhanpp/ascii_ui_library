import React, { createContext, useContext, ReactNode } from 'react';
import { THEMES, ThemeName } from '@sreenandhanpp/ascii-ui-themes';
import { BORDERS, BorderStyle } from '@sreenandhanpp/ascii-ui-engine';

interface ProviderProps {
  children: ReactNode;
  theme?: ThemeName;
  borderStyle?: BorderStyle;
  density?: "low" | "medium" | "high";
}

const UIContext = createContext<ProviderProps | null>(null);

export const AsciiUIProvider = ({ children, theme = "cyberpunk", borderStyle = "double", density = "medium" }: ProviderProps) => {
  return (
    <UIContext.Provider value={{ children, theme, borderStyle, density }}>
      <div className="ascii-ui-root" style={{ background: THEMES[theme].bg, color: THEMES[theme].text, minHeight: "100vh" }}>
        {children}
      </div>
    </UIContext.Provider>
  );
};

export const useAsciiUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useAsciiUI must be used within AsciiUIProvider");
  return ctx;
};
