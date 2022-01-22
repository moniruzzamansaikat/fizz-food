import React, { useState } from 'react';
import Category from '../components/Foods/Category';
import FoodCart from '../components/Foods/FoodCart';
import useFoods from '../hooks/useFoods';
import '../styles/Foods.css';

function Foods() {
  const { foods } = useFoods();
  const [category, setCategory] = useState('Breakfast');

  // return filtered foods
  const filteredFoods = foods.filter((food) => food.category === category);

  return (
    <div className="container my-5 foods">
      <Category category={category} setCategory={setCategory} />
      <div className="row">
        {filteredFoods.map((food) => (
          <div className="col-md-4" key={food.id}>
            <FoodCart food={food} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foods;
