import React from 'react';
import s from './FormInput.module.scss';

import Input from '../Input/Input';

function FormInput(props) {
  let {label, name} = props;
  return (
    <div className={s.formGroup}>
      <label htmlFor={name}>{label}</label>
      <Input {...props}/>
    </div>
  )
};

export default FormInput;