import React from 'react';
import ProductsScreen from './ProductsScreen';
import { CartProvider } from './CartContext';
import MyNavbar from './MyNavbar';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
