import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import StoreProduct from "./StoreProduct";
import { productsArr } from "../ProductDetails/productData";

function ProductsScreen() {
  return (
    <div>
      <div className="first-div">
        <h1>The Generics</h1>
      </div>
      <div className="second-div">
        <h2>Music</h2>
      </div>

      <Container className="mt-4">
        <Row xs={1} md={2} lg={3} className="g-4">
          {productsArr.map((product, index) => (
            <Col key={index}>
              <Link to={`/products/${product.id}`} className="product-link">
                <Card className="zoom-image">
                  <StoreProduct product={product} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductsScreen;
