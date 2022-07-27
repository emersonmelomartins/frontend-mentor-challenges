import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

const THEMES = {
  dark: darkTheme,
  light: lightTheme,
};

type ThemeType = keyof typeof THEMES;

export function App() {
  const APP_THEME = "APP::THEME";
  const DEFAULT_THEME = "dark";

  const [theme, setTheme] = useState<ThemeType>((): ThemeType => {
    const currentTheme = localStorage.getItem(APP_THEME);

    if (currentTheme) return currentTheme as ThemeType;

    localStorage.setItem(APP_THEME, DEFAULT_THEME);
    return DEFAULT_THEME;
  });

  function onToggleTheme(theme: ThemeType) {
    localStorage.setItem(APP_THEME, theme);
    setTheme(theme);
  }

  return (
    // With styled-components you can set default theme
    <ThemeProvider theme={THEMES[theme]}>
      <Header onToggleTheme={onToggleTheme} />
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}
