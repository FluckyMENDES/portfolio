import React from 'react';
import Title from './../Title/Title';
import classes from './Works.module.scss';
import WorksList from './WorksList/WorksList';
import work1Img from '../../assets/img/works-01.jpg';
import work2Img from '../../assets/img/works-02.jpg';
import work3Img from '../../assets/img/works-03.jpg';

const works = [
  {
    name: 'AEST LLC',
    type: 'Интернет-каталог',
    desc: 'Корпоративный сайт компании поставщика рыбной продукции. ',
    link: 'https://aest.info/',
    img: work1Img,
    video: '',
  },
  {
    name: 'Медсправочная',
    type: 'Интернет-каталог',
    desc: 'Сайт предоставляющий услуги медицинских документов с доставкой.',
    link: 'http://med-spravochnaya.com/',
    img: work2Img,
    video: '',
  },
  {
    name: 'U-Fly',
    type: 'Интернет-каталог',
    desc: 'Сайт аренды дронов/квадрокоптеров.',
    link: 'http://u-fly.ru/',
    img: work3Img,
    video: '',
  },
];

function Works() {
  return (
    <section>
      <Title level={2} className={classes.title}>
        Примеры моих работ:
      </Title>
      <WorksList works={works} />
    </section>
  );
}

export default Works;
