import React from 'react';
import s from './Button.module.scss';

function Buttom({name, style}) {
  return (
    <div className={`${s.brdButtom} center`} style={style}>
      <span>{name}</span>
    </div>
  );
};

export default Buttom;