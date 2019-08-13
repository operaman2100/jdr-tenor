import React from 'react';
import { Link } from 'react-router-dom';
import './LangToggle.css';

const LangToggle = () => {
  return (
    <div>
    <Link className="toggle-text">DE </Link><span className="toggle-hyphen">|</span><Link className="toggle-text"> EN</Link>
    </div>
  )
};

export default LangToggle;
