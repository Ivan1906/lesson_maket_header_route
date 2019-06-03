import React from 'react';
import s from './Button.module.scss';

function Button({text, style, onClick}) {
  return (
    <div className={`${s.brdButtom} center`} style={style} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};

export default Button;