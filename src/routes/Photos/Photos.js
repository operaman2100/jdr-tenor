import React from 'react';
import ProductionPhotos from '../../components/ProductionPhotos/ProductionPhotos';
import './Photos.css';

import donCarloGermany from '../../data/picGalleries/donCarloGermany.json';
import pearlFishers from '../../data/picGalleries/pearlFisherPics.json';
import rigolettoPics from '../../data/picGalleries/rigolettoPics.json';
import donCarloHouston from '../../data/picGalleries/donCarloHouston.json';
import hoffmanPics from '../../data/picGalleries/hoffmanPics.json';
import balloPics from '../../data/picGalleries/balloPics.json';
import trovatorePics from '../../data/picGalleries/trovatorePics.json';
import toscaPics from '../../data/picGalleries/toscaPics.json';
import turandotPics from '../../data/picGalleries/turandotPics.json';
import operaPics from '../../data/picGalleries/operaPics.json';

const Photos = () => {

    return (

        <div className="photoGallery-container">

        <h1 className="photoText">Don Carlo</h1>
        <div className="photoGallery-image"><ProductionPhotos props={donCarloGermany} /></div>
        <h1 className="photoText">Pearl Fishers</h1>
        <div className="photoGallery-image"><ProductionPhotos props={pearlFishers} /></div>
        <h1 className="photoText">Rigoletto</h1>
        <div className="photoGallery-image"><ProductionPhotos props={rigolettoPics} /></div>
        <h1 className="photoText">Don Carlo</h1>
        <div className="photoGallery-image"><ProductionPhotos props={donCarloHouston} /></div>
        <h1 className="photoText">Tales of Hoffmann</h1>
        <div className="photoGallery-image"><ProductionPhotos props={hoffmanPics} /></div>
        <h1 className="photoText">Un Ballo in Maschera</h1>
        <div className="photoGallery-image"><ProductionPhotos props={balloPics} /></div>
        <h1 className="photoText">Il Trovatore</h1>
        <div className="photoGallery-image"><ProductionPhotos props={trovatorePics} /></div>
        <h1 className="photoText">Tosca</h1>
        <div className="photoGallery-image"><ProductionPhotos props={toscaPics} /></div>
        <h1 className="photoText">Turandot</h1>
        <div className="photoGallery-image"><ProductionPhotos props={turandotPics} /></div>
        <h1 className="photoText">Miscellaneous Photos</h1>
        <div className="photoGallery-image"><ProductionPhotos props={operaPics} /></div>

        </div>

)

}

export default Photos;