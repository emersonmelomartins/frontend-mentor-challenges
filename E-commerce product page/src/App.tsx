import { Toaster } from "react-hot-toast";
import ReactModal from "react-modal";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "./contexts/CartContext";
import { PublicLayout } from "./layout/PublicLayout";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

ReactModal.setAppElement("#root");

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <PublicLayout>
          <Home />
          <Toaster position="top-center" />
          <GlobalStyles />
        </PublicLayout>
      </CartProvider>
    </ThemeProvider>
  );
}
