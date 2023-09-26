import React from 'react';
import ProductsScreen from './Store/ProductsScreen';
import { CartProvider } from './Store/CartContext';
import MyNavbar from './Navbar/MyNavbar';
import About from './About/About';
import Home from './Home/Home';
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
