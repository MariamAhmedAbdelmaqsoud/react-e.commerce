import { useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        totalCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
