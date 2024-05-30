import { createContext, useContext, useEffect, useState } from "react";
import { themeValues } from "../Constants/GeneralConstants";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevState) => !prevState);
  };

  const getTheme = () => {
    return isDarkMode ? themeValues.DARK : themeValues.LIGHT;
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", getTheme());
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme: getTheme(), toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
