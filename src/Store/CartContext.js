import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '../Authentication/AuthContext';
import axios from 'axios';

const CartContext = createContext();
const userEmailFromStorage = localStorage.getItem('userEmail');
const userEmail = userEmailFromStorage ? userEmailFromStorage.replace(/[@.]/g, '') : '';

export function CartProvider({ children }) {
  const { isLoggedIn } = useAuth();
  const [cart, setCart] = useState([]);
  

  // Fetch cart data from the API when the component mounts
  useEffect(() => {
    
    axios
      .get(`https://crudcrud.com/api/e29f57f0352e41778573a262262ff818/Cart${userEmail}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, [isLoggedIn]); // Empty dependency array ensures this effect runs once on mount

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.title === product.title);

    if (existingProduct) {
      const { _id, ...existingProductWithout_Id } = existingProduct;
      
      const updatedCart = cart.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item

      );
      setCart(updatedCart);

      axios
        .put(`https://crudcrud.com/api/e29f57f0352e41778573a262262ff818/Cart${userEmail}/${existingProduct._id}`, {
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
        .post(`https://crudcrud.com/api/e29f57f0352e41778573a262262ff818/Cart${userEmail}`, newProduct)
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
      .delete(`https://crudcrud.com/api/e29f57f0352e41778573a262262ff818/Cart${userEmail}/${product._id}`)
      .catch((error) => {
        console.error('Error removing from cart:', error);
      });
  };
  

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  const increaseQuantity = (product) => {
    const { _id, ...productWithout_Id } = product;
    
    const updatedCart = cart.map((item) =>
      item.title === product.title
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);

    axios
      .put(`https://crudcrud.com/api/e29f57f0352e41778573a262262ff818/Cart${userEmail}/${product._id}`, {
        ...productWithout_Id,
        quantity: productWithout_Id.quantity + 1,
      })
      .catch((error) => {
        console.error('Error updating cart:', error);
      });
  };

  const decreaseQuantity = (product) => {
    const { _id, ...productWithout_Id } = product;

    if (product.quantity > 1) {
      const updatedCart = cart.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      setCart(updatedCart);

      axios
      .put(`https://crudcrud.com/api/e29f57f0352e41778573a262262ff818/Cart${userEmail}/${product._id}`, {
        ...productWithout_Id,
        quantity: productWithout_Id.quantity - 1,
      })
      .catch((error) => {
        console.error('Error updating cart:', error);
      });
      
    } else {
      removeFromCart(product);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount,increaseQuantity,decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}


