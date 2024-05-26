import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <span className="logo--coffee">Sou</span>
        <span className="logo--grounds">Coffee</span>
      </Link>
    </div>
  );
}

export default Logo;