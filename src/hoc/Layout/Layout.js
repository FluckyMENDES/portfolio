import React from 'react';
import classes from './Layout.module.scss';
import Title from './../../components/Title/Title';
import Header from '../../components/Header/Header';

function Layout() {
  return (
    <>
      <Title level={2}>Layout</Title>
      <Header />
    </>
  );
}

export default Layout;
