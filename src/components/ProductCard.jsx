import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <Link to={`/bolos`}>
        <button className="details-button">Ver Detalhes</button>
      </Link>
    </div>
  );
};

export default ProductCard;