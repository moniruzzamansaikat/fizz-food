import React from 'react';
import { useNavigate } from 'react-router-dom';

function FoodCart({ food }) {
  const navigate = useNavigate();

  return (
    <div className="card food-card mb-4" data-aos="fade-up">
      <div className="card-body">
        <span className="category">{food.category}</span>
        <div className="content">
          <img src={food.image} alt={food.name} />
          <h5 className="card-title">{food.name}</h5>
          <h2 className="card-text my-3">${food.price}</h2>
          <button onClick={() => navigate(`/foods/${food.id}`)} className="btn">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCart;
