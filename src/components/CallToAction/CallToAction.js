import React from 'react';
import classes from './CallToAction.module.scss';
import Anchor from './../UI/Anchor/Anchor';

function CallToAction() {
  return (
    <div className={classes.CallToAction}>
      <p>
        Сделаем вместе что-то крутое! Пиши в{' '}
        <Anchor type="colored" href="https://tlgg.ru/FluckyMENDES" name="Я в telegram">
          telegram
        </Anchor>{' '}
        или{' '}
        <Anchor type="colored" href="mailto:flucky@mail.ru" name="Написать на электронную почту">
          e-mail
        </Anchor>
      </p>
    </div>
  );
}

export default CallToAction;
