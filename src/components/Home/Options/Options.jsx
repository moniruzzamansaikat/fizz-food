import React from 'react';
import { Link } from 'react-router-dom';
import './Options.css';

function Options() {
  return (
    <div className="options mt-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 mb-5 text-center">
            <div className="card">
              <div className="card-body">
                <div className="img">
                  <img src="/img/options/delivery-man.svg" alt="" />
                </div>
                <h2>Become a FizzBuzz</h2>
                <p>
                  As a delivery driver, you'll make reliable money—working
                  anytime, anywhere.
                </p>
                <Link to="/foods">Start eating &#8594;</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 text-center">
            <div className="card">
              <div className="card-body">
                <div className="img">
                  <img src="/img/options/partner.svg" alt="" />
                </div>
                <h2>Become a Partner</h2>
                <p>
                  Grow your business and reach new customers by partnering with
                  us.
                </p>
                <Link to="/foods">Let's know now &#8594;</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 text-center">
            <div className="card">
              <div className="card-body">
                <div className="img">
                  <img src="/img/options/app.svg" alt="" />
                </div>
                <h2>Try the App</h2>
                <p>
                  Experience the best your neighborhood has to offer, all in one
                  app.
                </p>
                <Link to="/foods">Download now &#8594; </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
