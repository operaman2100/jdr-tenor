import React, { useEffect, useState } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import './Carousel.css';
import autoDaFe from "../../images/auto-da-fe.jpg";
import donCarlo from '../../images/don-carlo-portrait.jpg';
import pearlPyramid from '../../images/pearl-pyramid.jpg';
import nadirSolo from '../../images/nadir-solo.jpg';

const images = [ autoDaFe, donCarlo, pearlPyramid, nadirSolo ];

const Carousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (index === 3) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        }, 4000);
        return () => clearInterval(timer);
    }, [index]);
    
    return (
        <div className="gallery-container">
        <Gallery index={ index } onRequestChange={i => { setIndex(i)}}>
        {images.map(image => ( <GalleryImage className="gallery-image" objectFit="contain" key={ image } src={ image } />))}

        </Gallery>
        

        </div>
    )
}

export default Carousel;
