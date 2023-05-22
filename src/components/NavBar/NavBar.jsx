import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <div className='left-items'>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
          <li>Elemento 4</li>
        </div>
        <div className='right-items'>
          <li>Elemento 5</li>
          <li>Elemento 6</li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
