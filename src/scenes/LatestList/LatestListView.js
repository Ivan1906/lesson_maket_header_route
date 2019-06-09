import React from 'react';
import s from './LatestList.module.scss';
import Header from './../../components/Header/Header';
import Search from './../../components/Search/Search';
import Product from '../../components/Product/Product';

function LatestListView({products, isLoading}) {
  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <React.Fragment>
      <Header theme="dark">
        <Search/>
      </Header>
      <div className={s.container}>
        <div className="columnTwo offsetColumnOne">
          <div className={s.paramsPanel}></div>
          <div className={s.listProducts}>
            {products
              .slice(0, 12)
              .map(product => <Product key={product.id} product={product}/>)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LatestListView;