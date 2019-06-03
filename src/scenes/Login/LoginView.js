import React from 'react';
import s from './Login.module.scss';
import {Link} from 'react-router-dom';

import Header from '../../components/Header/Header';
import FormInput from '../../components/Input/FormInput/FormInput';
import Button from '../../components/Button/Button';
import password from '../../img/password.svg';

function Login({fields, handleLogin, handleFieldChange}) {
  return (
    <React.Fragment>
      <Header theme="light"/>
      <div className="center" style={{
        flexDirection: "column"
      }}>
        <div className={`${s.blockLogin} panel`}>
          <span className={`${s.login} center`}>Login</span>
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

          <div className={s.contentRight}>
            <span className={s.rememberPass}>Don’t remember password?</span>
          </div>

          <Button
            text="Continue"
            style={{
            height: '58px'
          }}
            onClick={handleLogin}/>
        </div>

        <div className={`${s.registerNow} panel center`}>
          <span>I have no account,&nbsp;
            <Link to="/register">register now</Link>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
