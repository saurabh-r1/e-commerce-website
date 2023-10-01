import React from 'react';
import { useParams } from 'react-router-dom';
import { productsArr } from './productData'; // Import productsArr

const ProductDetails = () => {
  const { productId } = useParams(); // Get the product ID from the URL

  // Find the selected product based on productId
  const selectedProduct = productsArr.find(product => product.id === productId);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.title}</h2>
      <img src={selectedProduct.imageUrl} alt={selectedProduct.title} />
      <p>Price: ${selectedProduct.price}</p>
      {/* Add more details if needed */}
    </div>
  );
};

export default ProductDetails;
