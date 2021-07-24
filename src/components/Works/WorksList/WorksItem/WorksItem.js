import React from 'react';
import Title from '../../../Title/Title';
import Button from '../../../UI/Button/Button';
import classes from './WorksItem.module.scss';

function WorksItem({ name, type, desc, link, img, video }) {
  return (
    <li className={classes.WorksItem}>
      <div className={classes.content}>
        <span>{type}</span>
        <Title className={classes.title} level={3}>
          {name}
        </Title>
        <p>{desc}</p>
        <Button href={link} type="dark">
          Открыть сайт
        </Button>
      </div>
      <div className={classes.imageWrapper}>
        <img src={img} alt={name} />
      </div>
    </li>
  );
}

export default WorksItem;
