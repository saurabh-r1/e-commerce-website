// App.js
import React from 'react';
import ProductScreen from './ProductScreen';
import Cart from './Cart';
import { CartProvider } from './CartContext'; // Import the CartProvider

function App() {
  return (
    <div className="App">
      <CartProvider> {/* Wrap your app with CartProvider */}
      <Cart />
        <ProductScreen />

      </CartProvider>
    </div>
  );
}

export default App;
