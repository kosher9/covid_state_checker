import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">icoback</NavLink>
        <NavLink to="/param" />
      </nav>
    </header>
  </>
);

export default Navbar;
