
import React from 'react';
import ProductsScreen from './Store/ProductsScreen';
import { CartProvider } from './Store/CartContext';
import MyNavbar from './Navbar/MyNavbar';
import About from './About/About';
import Home from './Home/Home';
import ContactUs from './ContactUs/ContactUs';
import ProductDetails from './ProductDetails/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import AuthGuard from './Authentication/AuthGuard'; 
import { AuthContextProvider } from './Authentication/AuthContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AuthContextProvider>
        <Router>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route
              path="/products"
              element={
                <AuthGuard>
                  <ProductsScreen />
                </AuthGuard>
              }
            />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        </AuthContextProvider>
      </CartProvider>
    </div>
  );
}

export default App;
