import React from 'react';
import classes from './Header.module.scss';
import SocialList from './SocialList/SocialList';

function Header() {
  return (
    <header className={classes.Header}>
      <div>Logo</div>
      <SocialList />
    </header>
  );
}

export default Header;
