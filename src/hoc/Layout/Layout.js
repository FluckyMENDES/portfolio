import React from 'react';
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
