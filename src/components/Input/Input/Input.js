import React from 'react';
import s from './Input.module.scss';

function Input({placeholder, value, style, img, posImg}) {
  return (
    <div
      className={`${s.borderInput} center ${posImg === 'left'
      ? s.rowReverse
      : s.row}`}
      style={style}>
      <input placeholder={placeholder} value={value}/> {img && <img src={img} alt="icon"/>}
    </div>
  );
};

export default Input;