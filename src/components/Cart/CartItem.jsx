import React, { useState } from 'react';
import useFoods from '../../hooks/useFoods';
import '../../styles/CartItem.css';

function CartItem({ foodId, quantity }) {
  const { getFoodById, removeFromCart } = useFoods();
  const [food] = useState(getFoodById(foodId));

  return (
    <div className="cart-item">
      <img src={food.image} alt="" />
      <div className="d-flex justify-content-between align-items-center w-100">
        <div>
          <h5>{food.name}</h5>
          <p>${food.price}</p>
          <p className="category">{food.category}</p>
        </div>
        <div>
          <span className="me-2">{quantity} items</span>
          <button onClick={() => removeFromCart(foodId)}>
            <img src="/img/delete-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
