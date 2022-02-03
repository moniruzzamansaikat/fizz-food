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
      <div className='content'> 
        <h1>Foods to deliver directly to you door</h1>
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
