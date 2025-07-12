import { useState } from "react";
import { WishlistContext } from "./WishlistContext";
function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    };
    return (
      <WishlistContext.Provider
        value={{ wishlist, addToWishlist, removeFromWishlist }}
      >
        {children}
      </WishlistContext.Provider>
    );
}

export default WishlistProvider;