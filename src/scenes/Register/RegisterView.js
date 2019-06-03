import React from 'react';
import {Link} from 'react-router-dom';
import s from './Register.module.scss';

import Header from '../../components/Header/Header';
import FormInput from './../../components/Input/FormInput/FormInput';
import password from '../../img/password.svg';
import Button from './../../components/Button/Button';

function RegisterView({fields, handleFieldChange, handleRegister}) {
  return (
    <React.Fragment>
      <Header theme="light"/>
      <div className="center" style={{
        flexDirection: "column"
      }}>
        <div className={`${s.blockRegister} panel`}>
          <span className={`${s.register} center`}>Register</span>
          <FormInput
            name="email"
            fields={fields}
            label="Email"
            type="email"
            style={{
            height: "58px"
          }}
            placeholder="Example@gmail.com"
            onChange={handleFieldChange}/>

          <FormInput
            name="fullName"
            fields={fields}
            label="Full name"
            style={{
            height: "58px"
          }}
            placeholder="Tony Stark"
            onChange={handleFieldChange}/>

          <FormInput
            name="password"
            fields={fields}
            label="Password"
            type="password"
            style={{
            height: "58px"
          }}
            img={password}
            posImg="right"
            onChange={handleFieldChange}/>

          <FormInput
            name="confirmPassword"
            fields={fields}
            label="Password again"
            type="password"
            style={{
            height: "58px"
          }}
            img={password}
            posImg="right"
            onChange={handleFieldChange}/>

          <Button
            text="Continue"
            style={{
            height: '58px',
            marginTop: '32px'
          }}
            onClick={handleRegister}/>
        </div>

        <div className={`${s.loginNow} panel center`}>
          <span>I already have an account,&nbsp;
            <Link to="/login">log in</Link>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisterView;
