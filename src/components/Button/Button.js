import React from 'react';
import s from './Button.module.scss';

function Button({text, style, onClick, isLoading}) {
  return (
    <div className={`${s.brdButtom} center`} style={style} onClick={onClick}>
      <span>{isLoading
          ? "Loading ..."
          : text}</span>
    </div>
  );
};

export default Button;