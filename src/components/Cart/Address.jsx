import React from 'react';
import useAuth from '../../hooks/useAuth';

function Address() {
  const { address, updateAddress } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const city = e.target.city.value;
    const house = e.target.house.value;

    updateAddress({ phone, city, house });
  };

  return (
    <div className="card address-card">
      <div className="card-body">
        <h3 className="mb-3">Edit shipping address</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              defaultValue={address?.name}
              className="form-control"
              placeholder="Name"
              disabled
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="phone"
              defaultValue={address?.phone}
              className="form-control"
              placeholder="Phone no."
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="city"
              defaultValue={address?.city}
              className="form-control"
              placeholder="City/Town"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="house"
              defaultValue={address?.house}
              className="form-control"
              placeholder="House/Flat No"
            />
          </div>
          <button className="btn btn-custom">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Address;
