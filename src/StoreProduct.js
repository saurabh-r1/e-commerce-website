// StoreProduct.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './StoreProduct.css';
import { useCart } from './CartContext'; // Import the useCart hook

function StoreProduct(props) {
  const { title, price, imageUrl } = props.product;
  const { addToCart } = useCart(); // Use the addToCart function from the context

  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Title className="text-center mt-3">{title}</Card.Title>
        <div className="zoom-image">
          <Card.Img variant="top" src={imageUrl} alt={title} />
        </div>
        <Card.Body>
          <Row>
            <Col xs={6} className="text-start">
              <Card.Text>${price}</Card.Text>
            </Col>
            <Col xs={6} className="text-end">
              <Button variant="primary" onClick={() => addToCart(props.product)}>
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StoreProduct;
