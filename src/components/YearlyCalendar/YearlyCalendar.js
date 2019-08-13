import React from 'react';
import Gig from './Gig';

const YearlyCalendar = ({props}) => {

    return (
        <div>
        {props.map(operagig => (<Gig role={operagig.role} company={operagig.company} key={operagig.id} />))}
        </div>
    )
}

export default YearlyCalendar;
