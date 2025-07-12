import { Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Wishlist from "./components/wishlist/Wishlist";
import Navbar from "./components/navbar/navbar";
import ProductDetails from "./components/productDetails/ProductDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import CartPage from "./components/Cart/CartPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
