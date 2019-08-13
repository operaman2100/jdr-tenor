import React from 'react';
import './Gig.css';

const Gig = (props) => {
    return (
        <div className="gig-div">
        <p>{props.role}</p>
        <p>{props.company}</p>
        </div>
    )
}

export default Gig;