import React from 'react';
import Header from '../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

function Layout({ children, contentTopOffset, setContentTopOffset }) {
  return (
    <>
      <Header setContentTopOffset={setContentTopOffset} />
      <main style={{ paddingTop: contentTopOffset }}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
