import React from 'react';
import classes from './Layout.module.scss';
import Header from '../../components/Header/Header';

function Layout({ children, setContentTopOffset }) {
  return (
    <>
      <Header setContentTopOffset={setContentTopOffset} />
      {children}
    </>
  );
}

export default Layout;
