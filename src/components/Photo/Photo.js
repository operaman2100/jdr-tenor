import React from 'react';
import './Photo.css';

const Photo = ({props}) => {
  return (
    <div className="photoDiv">
    <img className="photoDiv-image" alt="John Rodger, tenor" src={props} />
    </div>
  )
}

export default Photo;
