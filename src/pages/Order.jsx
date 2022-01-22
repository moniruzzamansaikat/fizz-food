import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import OrderQuantity from '../components/Foods/OrderQuantity';
import BackButton from '../components/shared/BackButton';
import useFoods from '../hooks/useFoods';
import useAuth from '../hooks/useAuth';
import swal from 'sweetalert';

function Order() {
  const {
    getFoodById,
    addToCart,
    isInCart,
    getQuantity,
    removeFromCart,
    updateCart,
  } = useFoods();
  const { user } = useAuth();
  const navigate = useNavigate();
  const food = getFoodById(useParams().id);
  const [orderQuantity, setOrderQuantity] = useState(1);

  useEffect(() => {
    // if is in cart set orderQuantity to 1
    if (isInCart(food.id)) {
      setOrderQuantity(getQuantity(food.id));
    }
  }, [food.id, isInCart, getQuantity]);

  // handle order button
  const handleOrder = () => {
    // if no user is logged in, redirect to login page
    if (!user) {
      navigate('/sign-in');
      swal('Please sign in to order food', '', 'warning');
    } else {
      const order = {
        foodId: food.id,
        quantity: orderQuantity,
        userId: user.id,
      };
      if (isInCart(food.id)) {
        updateCart(food.id, orderQuantity);
      } else {
        addToCart(order);
      }
    }
  };

  // handle remove button
  const handleRemoveFromCart = () => {
    removeFromCart(food.id);
    setOrderQuantity(1);
  };

  return (
    <div className="order container my-5">
      <BackButton />

      <div className="row pt-4">
        <div className="col-md-7 mb-5">
          <h1>{food?.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, porro.
          </p>
          <h2 className="price">${food?.price}</h2>
          <OrderQuantity
            orderQuantity={orderQuantity}
            setOrderQuantity={setOrderQuantity}
          />
          <button className="btn btn-custom" onClick={handleOrder}>
            {isInCart(food.id) ? 'Update Order' : 'Order Now'}
          </button>
          {isInCart(food.id) && (
            <button
              className="btn btn-custom bg-danger ms-2 text-light"
              onClick={handleRemoveFromCart}
            >
              Remove
            </button>
          )}
        </div>
        <div className="col-md-5">
          <img src={food?.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Order;
