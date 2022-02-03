import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFoods from '../../hooks/useFoods';
import '../../styles/Navbar.css';

function Navbar() {
  const lcoation = useLocation();
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
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

  useEffect(() => {
    document.querySelector('.navbar-collapse') &&
      document.querySelector('.navbar-collapse').classList.remove('show');
  }, [pathname]);

  return (
    <nav className="navbar navbar-expand-md">
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
          <img src="/img/menu.svg" alt="" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/foods">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="cart shopping-cart" to="/cart">
                <span>Cart</span>
                <sup>{cart.length || 0}</sup>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">Partnership</Link>
            </li>
            <li className="nav-item">
              <Link to="/">About Us</Link>
            </li>
            <li className="nav-item">
              {!user ? (
                <Link className="btn-custom" to="/sign-in">
                  Sign In
                </Link>
              ) : (
                <span onClick={() => logout()} className="btn-custom">
                  Sign Out
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
