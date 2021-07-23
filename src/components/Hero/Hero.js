import React from 'react';
import Title from '../Title/Title';
import Button from '../UI/Button/Button';

function Hero() {
  return (
    <section>
      <Title level={1}>Привет, я веб-разработчик Олег.</Title>
      <Button type="dark">Связаться со мной</Button>
    </section>
  );
}

export default Hero;
