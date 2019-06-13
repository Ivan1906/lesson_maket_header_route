import axios from 'axios';

const urls = {
  'login': '/api/auth/login',
  'register': '/api/auth/register',
  'updateUser': '/api/account/user',
  'getViewer': '/api/account/user',
  'productsLatest': '/api/products/latest',
  'addproduct': '/api/products',
  'uploadImages': '/api/upload/images',
  'getProduct': '/api/products/:id'
};

export const listProducts = [{
  "id": "5bb76db4-41af-4759-8e5c-4f4086e6fd24",
  "ownerId": "206f999d-7d1e-4c27-ad9a-efc38ffaef8c",
  "title": "product #1",
  "description": "123",
  "photos": [
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560340582/ql2gtqbl9ifaimyeau8f.jpg"
  ],
  "location": "Тернопіль",
  "price": 100,
  "createdAt": 1560340588988,
  "updatedAt": null,
  "saved": false
},{
  "id": "bb7c44e6-9361-4a90-85be-b64833e43322",
  "ownerId": "222e1bac-3c54-4e99-a310-df57a207a6ad",
  "title": "TITLE",
  "description": "DESCRIPTION",
  "photos": [
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560339926/zdmq12tqkao2vk7kghzq.png",
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560339937/ssgwndsagozdnan6z8hw.jpg"
  ],
  "location": "LOCATION",
  "price": 8098098,
  "createdAt": 1560339938001,
  "updatedAt": null,
  "saved": false
},{
  "id": "877afcb1-4166-410b-8266-b66453737478",
  "ownerId": "9f2a819f-5b28-4f69-bddd-c4d3dab0c435",
  "title": "asad",
  "description": "12321",
  "photos": [
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560326302/enkhxiwsvrpidztcnhlm.jpg",
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560326307/lhsknh8xrmfzftthzet1.jpg",
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560326315/dcoo74my4zxtllpu0vfk.jpg",
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560326321/rdi0wbdtmo55qmj4axhr.jpg",
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560326327/sxjwkve685naqypysc1x.jpg",
    "https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1560326337/cyhbgdhs0rybpmtpprtw.jpg"
  ],
  "location": "asdasd",
  "price": 122,
  "createdAt": 1560326474731,
  "updatedAt": null,
  "saved": false
},
];

export const Favorites = {
  _favorites: [],

  get getFavorites() {
    return this._favorites;
  },

  init() {
    try {
      let favorites = window
        .localStorage
        .getItem('favorites');
      this.favorites = JSON.parse(favorites);
    } catch (e) {
      console.error(e);
    }
  },

  setFavorites(productId) {
    const element = this._favorites.find(elem => elem === productId);
    if (element) {
      this._favorites = this._favorites.filter(el => el !== productId);
    } else {
      this._favorites = this._favorites.concat(productId);
    }
    this._setFavorites();
  },

  _setFavorites() {
    try {
      window
        .localStorage
        .setItem('favorites', JSON.stringify(this._favorites),);
    } catch (e) {
      console.error(e);
    }
  }
};

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
      this._setTokenToAxios(this._token);
      Favorites.init()
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
  },

  update(body) {
    return axios.put(urls.updateUser, body)
  }
};

export const Products = {
  getLatest() {
    return axios.get(urls.productsLatest);
  },

  addProduct(body) {
    return axios.post(urls.addproduct, body);
  },

  getProductById(id) {
    return axios.get(urls.getProduct.replace(':id', id));
  },

  uploadImages(body) {
    let bodyFormData = new FormData();
    bodyFormData.append('image', body);

    return axios({
      method: 'post',
      url: urls.uploadImages,
      data: bodyFormData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    });
  }
}

export function init() {
  Auth.init();
}
