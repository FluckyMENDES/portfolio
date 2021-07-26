import React from 'react';
import Anchor from '../../../UI/Anchor/Anchor';
import classes from './SocialItem.module.scss';

function SocialItem({ title, Icon, href }) {
  return (
    <li className={classes.SocialItem}>
      <Anchor href={href} title={title}>
        <Icon fill="currentColor" />
      </Anchor>
    </li>
  );
}

export default SocialItem;
