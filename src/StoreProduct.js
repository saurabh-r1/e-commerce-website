import React from "react";

// The StoreProduct component receives a product prop, which is an individual product from the array.
function StoreProduct(props) {
  // destructuring assignment to extract title, price, and imageUrl from the props.product object.
  const { title, price, imageUrl } = props.product;

  return (
    <div className="product">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}

export default StoreProduct;


