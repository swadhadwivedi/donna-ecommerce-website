import React from 'react';
import { useCart } from "../context/CartContext";
import '../styles/productCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="product-card-button" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
