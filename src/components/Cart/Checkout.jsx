import React from 'react';
import useAuth from '../../hooks/useAuth';
import useFoods from '../../hooks/useFoods';
import CartItem from './CartItem';

function Checkout() {
  const { user, address } = useAuth();
  const { cart, getFoodById, confirmOrder } = useFoods();

  // calculate total price
  const totalPrice = cart.reduce((acc, food) => {
    const foodItem = getFoodById(food.foodId);
    return acc + foodItem.price * food.quantity;
  }, 0);

  const handleCheckout = () => {
    confirmOrder();
  };

  return (
    <div className="card checkout">
      <div className="card-body">
        <h3 className="mb-3">Checkout</h3>
        <p>Name: {user?.displayName} </p>
        <p>Phone: {address.phone ? address.phone : '--------'} </p>
        <p>City: {address?.city ? address.city : '---------'} </p>
        <p>House / Flat No: {address?.house ? address.house : '---------'} </p>

        {cart?.map((food, index) => (
          <CartItem key={index} foodId={food.foodId} quantity={food.quantity} />
        ))}

        <p className="d-flex justify-content-between">
          Total Price: <span>${totalPrice}</span>
        </p>
        <p className="d-flex justify-content-between">
          Shipping Charge: <span>${totalPrice ? 10 : 0}</span>
        </p>
        <h5 className="d-flex justify-content-between mb-3">
          Total Payable: <span>${totalPrice ? totalPrice + 10 : 0}</span>
        </h5>

        <button
          className={`btn btn-custom ${
            !address || !cart.length ? 'disabled' : ''
          }`}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
