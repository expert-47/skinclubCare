// ThemeProvider.js
import React, { createContext, useState } from "react";
import { themes } from "./themePalette";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [currentMode, setThemeMode] = useState("light");
  const theme = themes[currentMode];

  const toggleThemeMode = () => {
    setThemeMode(currentMode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme} toggleThemeMode={toggleThemeMode}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
