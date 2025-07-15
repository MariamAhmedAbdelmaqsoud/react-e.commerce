import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./components/Context/SearchProvider.jsx";
import CartProvider from "./components/Context/CartProvider";
import store from "./Redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SearchProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </SearchProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
