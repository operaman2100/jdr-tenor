import React from 'react';
import './Rep.css';
import Photo from '../../components/Photo/Photo';
import nadirSolo from '../../images/nadir-solo.jpg';
import OperaRep from '../../components/OperaRep/OperaRep';
import ConcertRep from '../../components/ConcertRep/ConcertRep';
import operaRoles from '../../data/operaRoles.json';

const Rep = () => {
  return (
    <div className="rep-div">
    <Photo props={nadirSolo} />
    <div className="roles-div">
    <OperaRep className="opera-component" props={operaRoles}/>
    </div>
    <div className="roles-div">
    <ConcertRep className="concert-component" />
    </div>
    </div>
  )
}

export default Rep;
