import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <header className="flex justify-between items-center w-11/12 mx-auto pt-4">
      <nav className="text-blue-600 flex items-center gap-4 text-lg">
        <NavLink to="/">
          <svg
            className="w-6 h-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </NavLink>
        {/* <NavLink to="/param">Love</NavLink> */}
      </nav>
    </header>
  </>
);

export default Navbar;
