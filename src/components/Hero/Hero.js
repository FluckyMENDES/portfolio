import React from 'react';
import Title from '../Title/Title';
import Button from '../UI/Button/Button';
import heroImg from './../../assets/img/hero.jpg';
import classes from './Hero.module.scss';

function Hero() {
  return (
    <section className={classes.Hero}>
      <div className={classes.description}>
        <Title className={classes.title} level={1}>
          Привет, я <strong>веб-разработчик</strong> Олег.
        </Title>
        <Button type="dark">Связаться со мной</Button>
      </div>
      <img className={classes.img} src={heroImg} alt="Я смотрю в новый совместный проект" />
    </section>
  );
}

export default Hero;
