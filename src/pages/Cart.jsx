import React from 'react';
import Address from '../components/Cart/Address';
import Checkout from '../components/Cart/Checkout';
import useFoods from '../hooks/useFoods';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, confirmed: confirmedOrder } = useFoods();

  return (
    <div className="container cart my-5">
      {cart.length > 0 ? (
        <div className="row">
          <div className="col-md-7 mb-5">
            <Address />
          </div>
          <div className="col-md-5 mb-5">
            <Checkout />
          </div>
        </div>
      ) : confirmedOrder ? (
        <div
          className="text-center py-4"
          data-aos="fade-in"
          data-aos-duration="10000"
          data-aos-delay="5000"
        >
          <img src="/img/thank-you.png" style={{ maxWidth: '400px' }} alt="" />
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center my-4">
              <img
                src="/img/sad-face.svg"
                style={{ width: '30px' }}
                className="me-2"
                alt=""
              />
              Your cart is empty | <Link to="/foods">Browe foods</Link>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
