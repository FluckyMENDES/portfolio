import React from 'react';
import classes from './Button.module.scss';

function Button({ children, type = 'dark', className }) {
  const cls = [classes.Button];

  if (className) cls.push(className);
  if (type) cls.push(classes[type]);

  return (
    <button className={cls.join(' ')} type="button">
      {children}
    </button>
  );
}

export default Button;
