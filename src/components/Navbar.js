import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <header className="flex justify-between items-center w-11/12 mx-auto pt-4">
      <nav className="text-blue-600 flex items-center gap-4 text-lg">
        <NavLink to="/">icoback</NavLink>
        {/* <NavLink to="/param">Love</NavLink> */}
      </nav>
    </header>
  </>
);

export default Navbar;
