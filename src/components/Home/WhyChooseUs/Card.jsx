import React from 'react';

function Card({ card }) {
  return (
    <div className="card mb-4" data-aos="fade-up">
      <div className="card-img-box">
        <img src={card.img} alt="" className="card-img-top" />
      </div>

      <div className="card-body d-flex">
        <div className="me-3">
          <img src={card.icon} alt="" className="card-icon" />
        </div>
        <div>
          <h4 className="card-title">{card.title}</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
