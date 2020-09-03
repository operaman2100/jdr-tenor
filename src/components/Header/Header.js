import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
    <Link className="header-link" to='/'>
    <h1 className="header-text">John D. Rodger - Tenor</h1>
    </Link>
    </div>
  )
}

export default Header;
