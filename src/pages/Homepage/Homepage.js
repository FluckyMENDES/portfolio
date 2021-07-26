import React from 'react';
import Hero from '../../components/Hero/Hero';
import Works from '../../components/Works/Works';
import CallToAction from '../../components/CallToAction/CallToAction';

function Homepage() {
  return (
    <div className="container">
      <Hero />
      <Works />
      <CallToAction />
    </div>
  );
}

export default Homepage;
