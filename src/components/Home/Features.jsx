import React from 'react';
import '../../styles/Features.css';

function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="row d-flex align-items-center mt-5 pt-5 ">
          <div className="col-md-6 " data-aos="fade-right">
            <h3>On a date ? </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget ex vitae nunc tincidunt egestas. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              veniam assumenda, vel, odit suscipit quasi optio temporibus
              impedit earum porro, eos sint molestias voluptatum? Adipisci omnis
              minima facere maxime perferendis?
            </p>
          </div>
          <div className="col-md-6 order-first mb-3 order-md-last">
            <img
              data-aos="fade-left"
              src="/img/date.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row d-flex align-items-center my-4">
          <div className="col-md-6">
            <img
              data-aos="fade-right"
              src="/img/vacation.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h3>On a vaction ? </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget ex vitae nunc tincidunt egestas. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              veniam assumenda, vel, odit suscipit quasi optio temporibus
              impedit earum porro, eos sint molestias voluptatum? Adipisci omnis
              minima facere maxime perferendis?
            </p>
          </div>
        </div>

        <div className="row d-flex align-items-center my-4">
          <div className="col-md-6" data-aos="fade-right">
            <h3>Guests on door ? </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget ex vitae nunc tincidunt egestas. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
          <div className="col-md-6 order-first order-md-last">
            <img
              data-aos="fade-left"
              src="/img/guests.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
