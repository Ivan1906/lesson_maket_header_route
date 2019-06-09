import React from 'react';
import moment from 'moment';
import s from './ProductDetail.module.scss';
import Header from './../../components/Header/Header';
import location from '../../img/location.svg';
import Avatar from './../../components/Avatar/Avatar';
import Button from './../../components/Button/Button';

function ProductDetailView({
  product,
  user,
  ...props
}) {
  console.log(props.owner)
  return (
    <React.Fragment>
      <Header theme="dark"/>
      <div className={s.container}>
        {props.isLoading && (
          <div>Loading ...</div>
        )}
        {product && (
          <div className={`${s.product} columnTwo offsetColumnOne`}>
            <div className={`${s.columnLeft} ${s.borderColumn}`}>
              <div className={s.productImage}>
                <img src={product.photos[0]} alt={product.title}/>
                <div className={s.price}>$ {product.price}</div>
              </div>
              <div className={s.textContent}>
                <div>
                  <span className={s.name}>{product.title}</span>
                  <span className={s.date}>{moment(product.createdAt).format('dddd HH:mm')}</span>
                </div>
                <div className={s.locationBlock}>
                  <img src={location} alt="location"/>
                  <span className={s.location}>{product.location}</span>
                </div>
                <hr/>
                <div className={s.description}>{product.description}</div>
              </div>

            </div>
            <div className={s.columnRight}>
              <div className={s.userBlock}>
                <div className={s.headerUserBlock}></div>
                <div className={s.avatar}>
                  <Avatar name="Yanik Ivan" color="red" height="72px" fontSize="35px"/>
                </div>
                <div className={s.userName}>{user
                    ? user.fullName
                    : ''}</div>
              </div>

              <Button
                text="Chat with seller"
                disabledBtn
                style={{
                height: "47px",
                margin: "15px 0"
              }}/>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
};

export default ProductDetailView;