import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Fetch cart data from the API when the component mounts
  useEffect(() => {
    axios
      .get('https://crudcrud.com/api/2027e790f15143619afd0de142b42a9b/cart')
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once on mount

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.title === product.title);

    if (existingProduct) {
      const { _id, ...existingProductWithout_Id } = existingProduct;
      console.log(existingProductWithout_Id);
      const updatedCart = cart.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item

      );
      setCart(updatedCart);

      // Perform a PUT request to update the cart on the API
      axios
        .put(`https://crudcrud.com/api/2027e790f15143619afd0de142b42a9b/cart/${existingProduct._id}`, {
          ...existingProductWithout_Id,
          quantity: existingProduct.quantity + 1,
        })
        .catch((error) => {
          console.error('Error updating cart:', error);
        });
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);

      // Perform a POST request to add the new product to the cart on the API
      axios
        .post('https://crudcrud.com/api/2027e790f15143619afd0de142b42a9b/cart', newProduct)
        .catch((error) => {
          console.error('Error adding to cart:', error);
        });
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);

    // Perform a DELETE request to remove the product from the API
    axios
      .delete(`https://crudcrud.com/api/2027e790f15143619afd0de142b42a9b/cart/${product._id}`)
      .catch((error) => {
        console.error('Error removing from cart:', error);
      });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
