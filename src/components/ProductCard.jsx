import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderCss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <Link to={`/bolos`}>
        <S.Button className="details-button">Ver Detalhes</S.Button>
      </Link>
    </div>
  );
};

export default ProductCard;