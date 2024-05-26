import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <h1>
        <Logo />
      </h1>
      <nav>
        <NavLink style={{ margin: "0 20px" }} to="/about">About</NavLink>
        <NavLink style={{ margin: "0 20px" }} to="/menu">Menu</NavLink>
        <NavLink style={{ margin: "0 20px" }} to="/visit">Visit</NavLink>
        <NavLink style={{ margin: "0 20px" }} to="/buy">Buy</NavLink>
      </nav>
    </header>
  );
}

export default Header;
