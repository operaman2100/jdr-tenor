import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <Link className="navLink" to='/'>Home</Link>
      <Link className="navLink" to='/bio'>CV</Link>
      <Link className="navLink" to='/calendar'>Dates</Link>
      <Link className="navLink" to='/av'>Media</Link>
      <Link className="navLink" to='/photos'>Photos</Link>
      <Link className="navLink" to='/rep'>Rep</Link>
      <Link className="navLink" to='/contact'> Contact</Link>
    </div>
  )
}

export default Nav;
