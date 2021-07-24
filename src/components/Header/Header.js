import React, { useEffect, useRef } from 'react';
import classes from './Header.module.scss';
import SocialList from './SocialList/SocialList';

function Header({ setContentTopOffset }) {
  const headerEl = useRef(null);

  useEffect(() => {
    setContentTopOffset(headerEl.current.getBoundingClientRect().height);
  }, [setContentTopOffset]);

  const cls = [classes.HeaderContainer, 'container'];

  return (
    <header className={classes.Header} ref={headerEl}>
      <div className={cls.join(' ')}>
        <span className={classes.HeaderLogo}>
          <strong>Oleg</strong>Kireev
        </span>
        <SocialList />
      </div>
    </header>
  );
}

export default Header;
