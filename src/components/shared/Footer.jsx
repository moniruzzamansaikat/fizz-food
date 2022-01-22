import React from 'react';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer py-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li>About Us</li>
              <li>See Offers</li>
              <li>Gift someone</li>
              <li>Invitie</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>Home</li>
              <li>Contact Us</li>
              <li>Ask a question</li>
              <li>Order now</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>Best foods</li>
              <li>Categories</li>
              <li>Best ordered foods</li>
            </ul>
          </div>
          <div className="col-md-3">
            <img
              src="/img/payment-options.png"
              alt="Payment Options"
              className="img-fluid"
            />
          </div>
        </div>

        <p className="text-center mt-3">
          All right reserved by{' '}
          <strong>
            <a className="text-muted" href="/">
              FizzFood
            </a>
          </strong>{' '}
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
