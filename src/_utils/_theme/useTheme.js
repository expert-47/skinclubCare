// useTheme.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return theme;
};
