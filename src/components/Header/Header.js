import React from 'react';
import { Link } from 'react-router-dom';
import logoLight from './Logo_light.svg';
import logoDark from './Logo_dark.svg';
import heartLight from './Heart_light.svg';
import heartDark from './Heart_dark.svg';
import s from './Header.module.scss';

function Header({ theme, children }) {
  let heightHeader =
    theme === 'light'
      ? 'light'
      : children
      ? 'darkThemeWithChildren'
      : 'darkThemeWithoutChildren';

  return (
    <React.Fragment>
      <div className={`${s.wrapper} ${heightHeader}`}>
        <div className={s.container}>
          <img
            className={s.logo}
            src={theme === 'light' ? logoLight : logoDark}
            alt="Apiko"
          />
          <div className={s.right}>
            <div
              className={s.searchContainer}
              style={{ height: children ? '126px' : null }}
            >
              <div className={`${s.btnShell} center`}>shell</div>
              {children}
            </div>
            <div className={`${s.btnLogin} center`}>
              <Link
                to="/login"
                style={{
                  color: theme === 'light' ? '#2B2B2B' : '#FFF',
                }}
              >
                login
              </Link>
            </div>
            <img
              className={s.heart}
              src={theme === 'light' ? heartLight : heartDark}
              alt="Heart"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
