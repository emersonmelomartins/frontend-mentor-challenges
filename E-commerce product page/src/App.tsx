import { ThemeProvider } from "styled-components";
import { PublicLayout } from "./layout/PublicLayout";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PublicLayout>
        <Home />
        <GlobalStyles />
      </PublicLayout>
    </ThemeProvider>
  );
}
