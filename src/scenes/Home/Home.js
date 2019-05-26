import React from 'react';
import Header from '../../components/Header/Header';
import Search from './../../components/Search/Search';

function Home() {
  return (
    <React.Fragment>
      <Header theme="dark">
        <Search />
      </Header>
      <div>Home</div>
    </React.Fragment>
  );
}

export default Home;
