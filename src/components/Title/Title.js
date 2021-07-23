import React from 'react';
import classes from './Title.module.scss';

function Title({ level = 1, children }) {
  const TitleLevel = `h${level}`;
  return <TitleLevel className={classes.Title}>{children}</TitleLevel>;
}

export default Title;
