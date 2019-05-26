import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import Router from './scenes/router';
import Footer from './components/Footer/Footer';
import Api from './api';
import store from './store/createStore';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    Api.init();
  }

  render() {
    return (
      <BrowserRouter>
        <Router/>
        <Footer/>
      </BrowserRouter>
    );
  }
}

const AppConnected = connect()(App);

ReactDOM.render(
  <Provider store={store}><AppConnected/></Provider>, document.getElementById('root'));