import React from 'react';
import s from './Avatar.module.scss';

function Avatar({name, color, height, fontSize}) {
  let shortName = '';
  name
    .split(' ')
    .forEach(element => shortName = shortName + element.charAt(0).toUpperCase());

  return (
    <div
      className={s.circle}
      style={{
      background: color,
      height: height,
      width: height,
      fontSize: fontSize
    }}>{shortName}</div>
  );
};

export default Avatar;