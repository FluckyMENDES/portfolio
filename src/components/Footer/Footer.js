import React from 'react';
import classes from './Footer.module.scss';

function Footer() {
  console.log(classes);
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <span>© olegkireev.ru 2021</span>
      </div>
    </footer>
  );
}

export default Footer;
