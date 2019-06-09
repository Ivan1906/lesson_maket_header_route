import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../Tools/PrivateRoute/PrivateRoute';

import LoginContainer from './Login/LoginContainer';
import RegisterContainer from './Register/RegisterContainer';
import AddProductContainer from './AddProduct/AddProductContainer';
import ProductDetailContainer from './ProductDetail/ProductDetailContainer';
import Home from './LatestList/LatestListContainer';
import Listing from './Listing/Listing';
import UserListings from './UserListings/UserListings';
import Inbox from './Inbox/Inbox';

export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  addProduct: '/addproduct',
  productDetail: '/product/:id',
  userListsings: '/users/:id',
  listingsById: '/listings/:id',
  profile: '/profile',
  bookmarks: '/bookmarks',
  privacy: '/privacy',
  terms: '/terms',
  search: '/search'
};

function NotFound() {
  return <div>404 Not Found</div>;
}

export default function Router() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={routes.home} component={Home}/>
        <Route path={routes.login} component={LoginContainer}/>
        <Route path={routes.register} component={RegisterContainer}/>
        <Route path={routes.addProduct} component={AddProductContainer}/>
        <Route path={routes.productDetail} component={ProductDetailContainer}/>
        <Route path={routes.listingsById} component={Listing}/>
        <Route path={routes.userListsings} component={UserListings}/>
        <Route path={routes.userListsings} component={UserListings}/>
        <PrivateRoute path={routes.privacy} component={Inbox}/>
        <Route component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}
