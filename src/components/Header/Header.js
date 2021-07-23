import React, { useEffect, useRef } from 'react';
import classes from './Header.module.scss';
import SocialList from './SocialList/SocialList';

function Header({ setContentTopOffset }) {
  const headerEl = useRef(null);

  useEffect(() => {
    setContentTopOffset(headerEl.current.getBoundingClientRect().height);
  }, [setContentTopOffset]);

  return (
    <header className={classes.Header} ref={headerEl}>
      <span className={classes.HeaderLogo}>
        <strong>Oleg</strong>Kireev
      </span>
      <SocialList />
    </header>
  );
}

export default Header;
