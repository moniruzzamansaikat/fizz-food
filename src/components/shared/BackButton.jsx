import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/BackButton.css';

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="back-button" onClick={() => navigate('/foods')}>
      <img src="/img/back-button.svg" alt="" />
      <span>Go Back</span>
    </div>
  );
}

export default BackButton;
