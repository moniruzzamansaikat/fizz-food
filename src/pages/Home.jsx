import React from 'react';
import Features from '../components/Home/Features';
import Header from '../components/Home/Header';
import Options from '../components/Home/Options/Options';
import WhyUs from '../components/Home/WhyChooseUs/WhyUs';

function Home() {
  return (
    <div>
      <Header />
      <Options />
      <Features />
      <WhyUs />
    </div>
  );
}

export default Home;
