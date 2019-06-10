import React from 'react';
import s from './Modal.module.scss';

function ModalView({
  back,
  ...props
}) {
  return (
    <div className="bgModal">
      <div className={s.modalContainer}>
        <div className={s.header}>
          <span>Contact seller</span>
          <div className={s.close} onClick={back}>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default ModalView;