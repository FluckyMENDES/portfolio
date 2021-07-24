import React, { useEffect, useRef } from 'react';
import classes from './Header.module.scss';
import SocialList from './SocialList/SocialList';

function Header({ setContentTopOffset }) {
  const headerEl = useRef(null);

  useEffect(() => {
    setContentTopOffset(headerEl.current.getBoundingClientRect().height);
  }, [setContentTopOffset]);

  const cls = [classes.Header, 'container'];
  return (
    <header className={cls.join(' ')} ref={headerEl}>
      <span className={classes.HeaderLogo}>
        <strong>Oleg</strong>Kireev
      </span>
      <SocialList />
    </header>
  );
}

export default Header;
