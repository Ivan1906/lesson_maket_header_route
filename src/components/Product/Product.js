import React from 'react';
import s from './Product.module.scss';
import dislike from '../../img/dislike.svg';

function Product({product}) {
  return (
    <div className={s.product}>
      <img
        className={s.mainImg}
        src={product.photos && product.photos.length > 0
        ? product.photos[0]
        : ''}
        alt={product.title}/>
      <div className={`${s.circle} center`}>
        <img src={dislike} alt="heard"/>
      </div>
      <span className={s.name}>{product.title}</span>
      <span className={s.price}>$ {product.price}</span>
    </div>
  );
};

export default Product;