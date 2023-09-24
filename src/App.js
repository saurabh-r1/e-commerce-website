// App.js
import React from 'react';
import ProductsScreen from './ProductsScreen';
import { CartProvider } from './CartContext';
import MyNavbar from './MyNavbar';
import About from './About'; // Import the About component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Route

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <MyNavbar />
          <Routes> {/* Wrap your routes in a Routes component */}
            <Route path="/" element={<ProductsScreen />} /> {/* Use 'element' prop */}
            <Route path="/about" element={<About />} /> {/* Use 'element' prop */}
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
