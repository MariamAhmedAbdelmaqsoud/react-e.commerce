import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import WishlistProvider from "./components/Context/WishlistProvider";
import SearchProvider from "./components/Context/SearchProvider.jsx";
import CartProvider from "./components/Context/CartProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <SearchProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </SearchProvider>
      </WishlistProvider>
    </BrowserRouter>
  </StrictMode>
);
