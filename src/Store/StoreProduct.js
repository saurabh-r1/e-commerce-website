import React from "react";
import { Card, Button } from "react-bootstrap";
import "./StoreProduct.css";
import { useCart } from "./CartContext";

function StoreProduct(props) {
  const { title, price, imageUrl } = props.product;
  const { addToCart } = useCart();

  return (
    <div>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => addToCart(props.product)}
          className="add-to-cart"
        >
          Add to Cart
        </Button>
      </Card.Body>
    </div>
  );
}

export default StoreProduct;
