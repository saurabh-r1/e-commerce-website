import React from "react";
import { Container, Row } from 'react-bootstrap';
import StoreProduct from './StoreProduct';

// We have the productsArr array with product data.
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];


// We render each product as a separate <div> with an image, title, and price in the ProductsScreen component by mapping through the productsArr array.


function ProductsScreen() {
  return (
    <Container>
      <Row>
        {productsArr.map((product, index) => (
          <StoreProduct
            key={index}
            product={product}
          />
        ))}
      </Row>
    </Container>
  );
}

export default ProductsScreen;

