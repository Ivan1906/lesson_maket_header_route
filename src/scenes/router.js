import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Tools/PrivateRoute/PrivateRoute';

import { EnhanceLogin } from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import Listing from './Listing/Listing';
import UserListings from './UserListings/UserListings';
import Inbox from './Inbox/Inbox';

export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  userListsings: '/users/:id',
  listingsById: '/listings/:id',
  profile: '/profile',
  bookmarks: '/bookmarks',
  privacy: '/privacy',
  terms: '/terms',
  search: '/search',
};

function NotFound() {
  return <div>404 Not Found</div>;
}

export default function Router() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.login} component={EnhanceLogin} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.listingsById} component={Listing} />
        <Route path={routes.userListsings} component={UserListings} />
        <Route path={routes.userListsings} component={UserListings} />
        <PrivateRoute path={routes.privacy} component={Inbox} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
