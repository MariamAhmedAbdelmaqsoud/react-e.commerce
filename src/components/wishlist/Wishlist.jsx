import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { removeFromWishlist } from "../../Redux/wishlistSlice.js";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <h3 id="wishlist">Your Wishlist</h3>
      <Row>
        {wishlist.length === 0 ? (
          <p className="text-muted">No items in your wishlist yet.</p>
        ) : (
          wishlist.map((item) => (
            <Col md={3} className="mb-3" key={item.id}>
              <div className="border p-2 rounded bg-light h-100">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="img-fluid mb-2"
                />
                <h6>{item.title}</h6>
                <p className="text-muted small">
                  {item.description.slice(0, 60)}...
                </p>
                <button
                  className="btn btn-sm btn-danger mt-2"
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                >
                  Remove from Wishlist
                </button>
              </div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}
