import React, { useState } from 'react';
import Card from './Card';
import '../../../styles/WhyUs.css';

function WhyUs() {
  const [cards] = useState([
    {
      title: 'Fast Delivery',
      img: '/img/fast-delivary.jpg',
      icon: '/img/fast-delivery.png',
    },
    {
      title: 'Best chefs',
      img: '/img/best-cook.jpg',
      icon: '/img/cooking.png',
    },
    {
      title: 'Home Delivery',
      img: '/img/home-delivary.jpg',
      icon: '/img/home-delivery.png',
    },
  ]);

  return (
    <div className="why_choose_us py-5">
      <div className="container my-4">
        <h1>Why Choose Us?</h1>
        <div className="row mt-5">
          {cards.map((card, index) => (
            <div className="col-md-4" key={index}>
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
