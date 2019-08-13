import React, { useState } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import './ProductionPhotos.css';

const ProductionPhotos = ({props}) => {
    const [index, setIndex] = useState(0);

    return (
        <div className="production-container">
        <Gallery index={index} onRequestChange={i => { setIndex(i)}} >
        {props.map(img => ( 
            <GalleryImage className="production-image" objectFit="contain" key={img.src } src={process.env.PUBLIC_URL + img.src} /> )) }
        </Gallery>
        </div>
    )
}

export default ProductionPhotos;
