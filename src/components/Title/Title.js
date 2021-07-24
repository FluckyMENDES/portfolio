import React from 'react';
import classes from './Title.module.scss';

function Title({ level = 1, className, children }) {
  const cls = [classes.Title];
  if (className) cls.push(className);

  const TitleLevel = `h${level}`;
  return <TitleLevel className={cls.join(' ')}>{children}</TitleLevel>;
}

export default Title;
