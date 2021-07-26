import React from 'react';
import classes from './Anchor.module.scss';

function Anchor({ href, name, children, type }) {
  const cls = [classes.Anchor];
  if (type === 'colored') {
    cls.push(classes.colored);
  }

  return (
    <a className={cls.join(' ')} href={href} title={name} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default Anchor;
