import React from 'react';
import '../../styles/Category.css';

function Category({ category, setCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => setCategory('Breakfast')}
          className={category === 'Breakfast' ? 'active' : ''}
        >
          Breakfast
        </li>
        <li
          onClick={() => setCategory('Lunch')}
          className={category === 'Lunch' ? 'active' : ''}
        >
          Lunch
        </li>
        <li
          onClick={() => setCategory('Dinner')}
          className={category === 'Dinner' ? 'active' : ''}
        >
          Dinner
        </li>
      </ul>
    </div>
  );
}

export default Category;
