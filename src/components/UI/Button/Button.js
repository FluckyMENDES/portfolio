import React from 'react';
import classes from './Button.module.scss';

function Button({ children, type = 'dark' }) {
  const cls = [classes.Button];

  if (type) cls.push(classes[type]);

  return (
    <button className={cls.join(' ')} type="button">
      {children}
    </button>
  );
}

export default Button;
