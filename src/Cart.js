import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useCart } from './CartContext';


function Cart() {
  const [showCart, setShowCart] = useState(false);
  const { cart, cartCount, addToCart } = useCart(); // Use the cart and cartCount from the context

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const removeFromCart = (product) => {
    // Remove the item from the cart using the addToCart function
    addToCart(product);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart ({cartCount}) {/* Display the cart count */}
      </Button>

      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
