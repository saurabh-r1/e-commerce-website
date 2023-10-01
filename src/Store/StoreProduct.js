import React from "react";
import { Card, Button } from "react-bootstrap";
import "./StoreProduct.css";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function StoreProduct(props) {
  const { title, price, imageUrl } = props.product;
  const { addToCart } = useCart();

  return (
    <div>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to="#" 
        onClick={() => addToCart(props.product)}
        className="add-to-cart"
        >
                <Button variant="primary">
                  Add to Cart
                </Button>
              </Link>
        
      </Card.Body>
    </div>
  );
}

export default StoreProduct;
