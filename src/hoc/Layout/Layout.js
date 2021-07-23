import React from 'react';
import classes from './Layout.module.scss';
import Header from '../../components/Header/Header';

function Layout({ children, contentTopOffset, setContentTopOffset }) {
  return (
    <>
      <Header setContentTopOffset={setContentTopOffset} />
      <main style={{ paddingTop: contentTopOffset }}>{children}</main>
    </>
  );
}

export default Layout;
