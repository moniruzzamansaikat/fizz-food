import React from 'react';
import '../../styles/OrderQuantity.css';

function OrderQuantity({ orderQuantity, setOrderQuantity }) {
  return (
    <div className="input-group mb-3 orderquantity">
      <span className="input-group-btn">
        <button
          type="button"
          className="btn btn-custom decrease"
          onClick={() => setOrderQuantity(orderQuantity - 1)}
        >
          -
        </button>
      </span>
      <input
        type="number"
        className="form-control"
        value={orderQuantity}
        min="1"
        max="10"
        onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
      ></input>
      <span className="input-group-btn">
        <button
          type="button"
          className="btn btn-custom"
          onClick={() => setOrderQuantity(orderQuantity + 1)}
        >
          +
        </button>
      </span>
    </div>
  );
}

export default OrderQuantity;
