export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  init() {
    try {
      let token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
    } catch (e) {
      console.error(e);
    }
  },

  login() {
    this._token = 'token';
    this._setToken();
  },

  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem('token');
    } catch (e) {
      console.log(e);
    }
  },

  _setToken() {
    try {
      window.localStorage.setItem(
        'token',
        JSON.stringify(this._token),
      );
    } catch (e) {
      console.error(e);
    }
  },
};

export function init() {
  Auth.init();
}
