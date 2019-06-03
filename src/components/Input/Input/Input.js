import React from 'react';
import s from './Input.module.scss';

function Input({
  type = 'text',
  name,
  fields,
  placeholder,
  style,
  img,
  posImg,
  onChange
}) {
  return (
    <div
      className={`${s.borderInput} center ${posImg === 'left'
      ? s.rowReverse
      : s.row}`}
      style={style}>

      <input
        type={type}
        placeholder={placeholder}
        value={fields[name]}
        onChange={(evt) => onChange(name, evt.target.value)}/> {img && <img src={img} alt="icon"/>}
    </div>
  );
};

export default Input;