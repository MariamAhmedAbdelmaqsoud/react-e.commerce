import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h3>Your cart is empty 🛒</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Your Cart</h2>
      <Row>
        {cartItems.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={item.thumbnail}
                style={{ height: "h-100", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="fw-bold m-3">${item.price}</Card.Text>
                  <div className="d-flex align-items-center gap-2 m-2">
                    <Button
                      variant="outline-danger"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline-success"
                      onClick={() => increaseQuantity(item.id)}
                      disabled={item.quantity === item.stock}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  variant="danger"
                  className="mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
