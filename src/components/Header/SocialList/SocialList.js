import React from 'react';
import classes from './SocialList.module.scss';
import SocialItem from './SocialItem/SocialItem';

import { ReactComponent as CvIcon } from './../../../assets/img/icon/cv.svg';
import { ReactComponent as TelegramIcon } from './../../../assets/img/icon/telegram.svg';
import { ReactComponent as GithubIcon } from './../../../assets/img/icon/github.svg';
import { ReactComponent as EmailIcon } from './../../../assets/img/icon/email.svg';

const links = [
  {
    title: 'Резюме',
    iconComponent: CvIcon,
    href: 'https://hh.ru/resume/15ce8feeff0858739d0039ed1f616756373455',
  },
  { title: 'Telegram', iconComponent: TelegramIcon, href: 'https://tlgg.ru/FluckyMENDES' },
  { title: 'Github', iconComponent: GithubIcon, href: 'https://github.com/FluckyMENDES' },
  { title: 'E-mail', iconComponent: EmailIcon, href: 'mailto:flucky@mail.ru' },
];

function SocialList() {
  return (
    <ul className={classes.SocialList}>
      {links.map(({ title, iconComponent, href }, index) => (
        <SocialItem title={title} Icon={iconComponent} href={href} key={`${title}${index}`} />
      ))}
    </ul>
  );
}

export default SocialList;
