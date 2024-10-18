import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Store";
import App from "./App.jsx";
import "./index.css";
import "./fireBase";
import CartProvider from "./Contexts/CartContext.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
