import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(img/banner.jpg)` }}
    >
      <div>
        <h1>Best food for you to eat</h1>
        <div className="search">
          <button onClick={() => navigate('/foods')}>
            Start finding foods...
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
