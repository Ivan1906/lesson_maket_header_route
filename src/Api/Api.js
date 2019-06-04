import axios from 'axios';

const urls = {
  'login': '/api/auth/login',
  'register': '/api/auth/register',
  'getViewer': '/api/account/user'
}

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;
    this._setToken(token);
    this._setTokenToAxios(token);
  },

  init() {
    try {
      let token = window
        .localStorage
        .getItem('token');
      this._token = JSON.parse(token);
      this._setTokenToAxios(token);
      console.log(axios.defaults.headers.common.Authorization);
    } catch (e) {
      console.error(e);
    }
  },

  login(body) {
    return axios.post(urls.login, body);
  },

  register(body) {
    return axios.post(urls.register, body);
  },

  logout() {
    this._token = null;
    try {
      window
        .localStorage
        .removeItem('token');
    } catch (e) {
      console.log(e);
    }
  },

  _setToken() {
    try {
      window
        .localStorage
        .setItem('token', JSON.stringify(this._token),);
    } catch (e) {
      console.error(e);
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

export const Viewer = {
  get() {
    return axios.get(urls.getViewer);
  }
};

export function init() {
  Auth.init();
}
