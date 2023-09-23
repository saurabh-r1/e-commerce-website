
import React from 'react';
import { Card } from 'react-bootstrap';

// The StoreProduct component receives a product prop, which is an individual product from the array.
function StoreProduct(props) {
  // destructuring assignment to extract title, price, and imageUrl from the props.product object.
  const { title, price, imageUrl } = props.product;

  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StoreProduct;



