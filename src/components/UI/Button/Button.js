import React from 'react';
import classes from './Button.module.scss';

function Button({ children, type = 'dark', className, href }) {
  const cls = [classes.Button];

  if (className) cls.push(className);
  if (type) cls.push(classes[type]);

  return (
    <a className={cls.join(' ')} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default Button;
