import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";

export default function Product({ product }) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const isInWishlist = wishlist.find((item) => item.id === product.id);

  const toggleWishlist = () => {
    isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  const navigate = useNavigate();

  const handleIncrease = (e) => {
    e.stopPropagation();
    if (quantity < product.stock) {
      increaseQuantity(product.id);
    }
  };

  const handleDecrease = (e) => {
    e.stopPropagation();
    if (quantity > 0) {
      decreaseQuantity(product.id);
    }
  };

  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar key={i} color="gold" />);
    }
    return stars;
  };

  return (
    <div
      className="card p-3 shadow-sm h-100 position-relative"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div
        className="position-absolute top-0 end-0 m-2"
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist();
        }}
        style={{ zIndex: 1 }}
      >
        {isInWishlist ? (
          <FaHeart color="red" size={25} />
        ) : (
          <FaRegHeart color="gray" size={25} />
        )}
      </div>

      <img
        src={product.thumbnail}
        className="card-img-top"
        alt={product.title}
        style={{ objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column h-100">
        <h5>{product.title}</h5>
        <p className="text-muted h-100">{product.description}</p>
        <p className="fw-bold text-muted">stock: {product.stock}</p>
        <p className="fw-bold text-success">${product.price}</p>
        <p>{getStars(product.rating)}</p>

        {quantity > 0 ? (
          <div className="d-flex align-items-center gap-2 mb-2">
            <button className="btn btn-outline-danger" onClick={handleDecrease}>
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn btn-outline-success"
              onClick={handleIncrease}
              disabled={quantity === product.stock}
            >
              +
            </button>
          </div>
        ) : null}

        <button
          className="btn btn-warning w-100"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          disabled={quantity > 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
