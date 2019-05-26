import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './scenes/router';
import Footer from './components/Footer/Footer';
import Api from './Api';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    Api.init();
  }

  render() {
    return (
      <BrowserRouter>
        <Router />
        <Footer />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));