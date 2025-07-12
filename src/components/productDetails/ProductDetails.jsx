import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  if (!product) {
    return <Spinner animation="border" variant="warning" />;
  }
  return (
    <Container
      className="mt-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Row className="align-items-center">
        <Col md={5}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>
        <Col md={7}>
          <h2 className="mb-3">{product.title}</h2>
          <p>{product.description}</p>
          <p className="fw-bold text-success h5">${product.price}</p>
          <p className="text-muted">Stock: {product.stock}</p>

          <Button
            variant="warning"
            className="mt-4 text-dark"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
