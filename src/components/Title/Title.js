import React from 'react';

function Title({ level = 1, children }) {
  const TitleLevel = `h${level}`;
  return <TitleLevel>{children}</TitleLevel>;
}

export default Title;
