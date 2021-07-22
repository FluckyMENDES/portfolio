import React from 'react';
import classes from './Header.module.scss';
import SocialList from './SocialList/SocialList';

function Header() {
  return (
    <header className={classes.Header}>
      <span className={classes.HeaderLogo}>
        <strong>Oleg</strong>Kireev
      </span>
      <SocialList />
    </header>
  );
}

export default Header;
