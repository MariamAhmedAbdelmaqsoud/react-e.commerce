import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { setSearchTerm } = useContext(SearchContext);
  const { totalCount } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand fw-bold text-warning" href="#">
        Shopella
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        {/* Home Link */}
        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning fw-bold" to="/wishlist">
              Wishlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning" to="/register">
              Sign Up
            </Link>
          </li>
          <div
            className="ms-3 text-warning fw-bold d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart size={24} className="me-1" /> {totalCount}
          </div>
        </ul>

        {/* Search Bar */}
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
