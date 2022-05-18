import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">icoback</NavLink>
          <NavLink to="/param"></NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
