import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useCart } from './CartContext';
import { useAuth } from '../Authentication/AuthContext';
import './Cart.css';

function Cart() {
  const [showCart, setShowCart] = useState(false);
  const { cart, cartCount, removeFromCart, increaseQuantity,decreaseQuantity } = useCart();
  const authCtx = useAuth();

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);
  
  
  return (
    <>
      {authCtx.isLoggedIn && (
      <Button style={{ background: "#000" }} onClick={handleShow}>
        Cart ({cartCount})
      </Button>
      )}

      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <div className="quantity-control">
                      <Button
                        variant="outline-danger"
                        onClick={() => decreaseQuantity(item)}
                        className="quantity-button"
                      >
                        -
                      </Button>
                      <span className="quantity">{item.quantity}</span>
                      <Button
                        variant="outline-success"
                        onClick={() => increaseQuantity(item)}
                        className="quantity-button"
                      >
                        +
                      </Button>
                    </div>
                  </td>
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
