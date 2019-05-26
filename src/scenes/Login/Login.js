import React from 'react';
import { compose, withHandlers } from 'recompose';
import Header from '../../components/Header/Header';
import Api from '../../Api';

function Login({ login, logout }) {
  return (
    <React.Fragment>
      <Header theme="light" />
      <div className="center">
        {!Api.Auth.isLoggedIn ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </React.Fragment>
  );
}

const enhance = compose(
  withHandlers({
    login: (props) => (event) => {
      Api.Auth.login();
      let { from } = props.location.state || {
        from: { pathname: '/' },
      };
      props.history.push(from.pathname);
    },
    logout: (props) => (event) => {
      Api.Auth.logout();
      props.history.push('/');
    },
  }),
);

export const EnhanceLogin = enhance(Login);
