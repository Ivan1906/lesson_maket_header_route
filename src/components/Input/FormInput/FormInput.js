import React from 'react';
import s from './FormInput.module.scss';

import Input from '../Input/Input';

function FormInput(props) {
  let {label} = props;
  return (
    <div className={s.formGroup}>
      <label>{label}</label>
      <Input {...props}/>
    </div>
  )
};

export default FormInput;