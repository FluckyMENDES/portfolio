import React from 'react';
import classes from './Anchor.module.scss';

function Anchor({ href, name, Icon }) {
  return (
    <a className={classes.Anchor} href={href} title={name} target="_blank" rel="noreferrer">
      <Icon fill={'currentColor'} />
    </a>
  );
}

export default Anchor;
