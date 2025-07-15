import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { SearchContext } from "../Context/SearchContext";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../Redux/wishlistSlice.js";
import Product from "./../product/Product.jsx";

export default function Products() {
  const [data, setData] = useState([]);
  const { searchTerm } = useContext(SearchContext);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res?.data?.products));
  }, []);

  const filteredProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Products</h2>
      <Row>
        {filteredProducts?.map((product) => (
          <Col md={4} className="mb-4" key={product.id}>
            <Product
              product={product}
              onAddToWishlist={() => dispatch(addToWishlist(product))}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
