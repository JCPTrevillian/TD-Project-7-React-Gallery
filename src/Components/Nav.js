import React from 'react';
import { NavLink } from 'react-router-dom';

//chose 3 subjects to meet project requirement 

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/search/beaches’Beaches</NavLink></li>
        <li><NavLink to='/search/lakes’>Lakes</NavLink></li>
        <li><NavLink to='/search/mountains’>Mountains</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
