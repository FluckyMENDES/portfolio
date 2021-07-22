import React from 'react';
import classes from './SocialList.module.scss';
import SocialItem from './SocialItem/SocialItem';

const links = [
  { name: 'Резюме', icon: 'cv', href: '#' },
  { name: 'Telegram', icon: 'tg', href: '#' },
  { name: 'Github', icon: 'gh', href: '#' },
  { name: 'E-mail', icon: 'em', href: 'mailto:flucky@mail.ru' },
];

function SocialList() {
  return (
    <ul className={classes.SocialList}>
      {links.map(({ name, icon, href }, index) => (
        <SocialItem name={name} icon={icon} href={href} key={`${name}${index}`} />
      ))}
    </ul>
  );
}

export default SocialList;
