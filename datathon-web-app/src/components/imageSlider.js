import React, {useState}from 'react'
import * as IoIcons from 'react-icons/io5';

const ImageSlider = ({slides}) => {

    const [currentImage, setCurrentImage] = useState(0); 
    const length = slides.length;

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    }

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className="imgSlider">
        <IoIcons.IoArrowBack className="left-arrow" onClick={prevSlide}/>
        <IoIcons.IoArrowForward className="right-arrow" onClick= {nextSlide}/>

        {slides.map((slide, index) => {
            return(
                <div className={index === currentImage ? 'slide active' : 'slide'}
                key={index }>
                    {index === currentImage && (
                    <img src = {slide.image} alt = "analysis image" className="image"/>)}
                    <p className="slideDescription">{slide.description}</p>
                </div>
            )
        })}
        </section>
    )
}

export default ImageSlider;
