import {createSelector} from 'reselect';

const photos = state => state.products.AddProduct.product.photos;
const getProductEntities = state => state.entities.products;
const getUserEntities = state => state.entities.users;
const getLatestProducts = state => state.products.latest.products;

export const getPhotos = createSelector(photos, state => state,);

export const getLatest = createSelector([
  getProductEntities, getLatestProducts
], (entities, ids) => ids.map(i => entities[i]));

export const getProduct = createSelector((state, id) => getProductEntities(state)[id], item => item);

export const getProductOwner = createSelector((state, id) => {
  const users = getUserEntities(state);
  const products = getProductEntities(state);
  const product = products[id];
  console.log(product)
  return users[product.owner || product.ownerId]
}, item => item);