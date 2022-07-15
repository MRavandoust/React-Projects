import useLocalStorage from "use-local-storage";
import { useEffect, useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchBtn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
