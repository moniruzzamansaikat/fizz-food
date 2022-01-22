import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFoods from '../../hooks/useFoods';
import '../../styles/Navbar.css';

function Navbar() {
  const lcoation = useLocation();
  const { user, logout } = useAuth();
  const { cart } = useFoods();

  // change the navbar background color when scrolling
  useEffect(() => {
    const nav = document.querySelector('.navbar');

    if (lcoation.pathname === '/') {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 0);
      });
    } else {
      nav.classList.add('scrolled');
    }
  }, [lcoation]);

  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Fizz <span>Food</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* if user show cart icon */}
            {user && (
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <span className="shopping-cart">
                    <img src="/img/cart.svg" alt="" />
                    <sup>{cart?.length}</sup>
                  </span>
                </Link>
              </li>
            )}

            {!user ? (
              <li className="nav-item">
                <Link to="/sign-in" className="btn btn-custom">
                  Sign In
                </Link>
              </li>
            ) : (
              <li>
                <img src={user.photoURL} alt="" className="user_icon" />
                <img
                  src="/img/logout.png"
                  alt=""
                  className="logout_icon"
                  onClick={() => logout()}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
