import React from 'react';
import './Footer.css';
import youtube from '../../images/social-icons/youtube.svg';
import insta from '../../images/social-icons/instagram.svg';
import linkedin from '../../images/social-icons/linkedin.svg';

const Footer = () => {
  const currentDate = new Date()

  return (
    <div className="footer">

    <div className="social-div">
      <a className="social-buttons-divs" href="https://www.youtube.com/watch?v=zmZEskpmnn0" alt="youtube link">
      <img className="social-buttons" alt="youtube link" src={youtube} />
      </a>
    
      <a className="social-buttons-divs" href="https://www.instagram.com/misterrodger/">
      <img className="social-buttons" alt="instagram link" src={insta} />
      </a>

      <a className="social-buttons-divs" href="https://www.linkedin.com/in/john-rodger-9b4b7415/" >
      <img className="social-buttons" alt="linkedin link" src={linkedin} />
      </a>
    </div>
    
    <h6>Copyright 2019-{currentDate.getFullYear()}, John D. Rodger. All Rights Reserved.</h6>
    </div>
  )
}

export default Footer;
