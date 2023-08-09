import React from 'react';
import { useState } from 'react';
import image1 from '../assets/images/mobile-image-hero-1.jpg';
import image2 from '../assets/images/mobile-image-hero-2.jpg';
import image3 from '../assets/images/mobile-image-hero-3.jpg';
import desktopimage1 from '../assets/images/desktop-image-hero-1.jpg';
import desktopimage2 from '../assets/images/desktop-image-hero-2.jpg';
import desktopimage3 from '../assets/images/desktop-image-hero-3.jpg';
import arrowImage from '../assets/images/icon-arrow.svg';
import leftButton from '../assets/images/icon-angle-left.svg';
import rightButton from '../assets/images/icon-angle-right.svg';

const screenWidth = window.innerWidth;
const obj =[
  {
    id: 1,
    image: screenWidth >= 810 ? desktopimage1 : image1,
    banner: `Discover innovative ways to decorate`,
    desc: `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
  },{
    id: 2,
    image: screenWidth >= 810 ? desktopimage2 : image2,
    banner: `We are available all across the globe`,
    desc: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
  },{
    id:3,
    image: screenWidth >= 810 ? desktopimage3 : image3,
    banner: `Manufactured with the best materials`,
    desc: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office..`
  }
];
export const Data = () =>{
  const [current, setCurrent] = useState(0);
  const length = obj.length;

  const nextSlide = () =>{
    setCurrent(current === length -1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1);
  }
  return(
    <>
    {obj.map((slide, index) => 
      <section key={index}>
        {index === current && (
          <>
            <img src={slide.image} alt="image-banner" className={`slide${current > 1 ? 'left' : 'right'}`}/>
            <div className='section-content'>
              <h1>{slide.banner}</h1>
              <p>
                {slide.desc}
              </p>
              <button>shop now <img src={arrowImage} alt="arrow" /></button>
            </div>
          </>
        )}
      </section>
    )}
      <div className='content-button'>
        <button onClick={prevSlide} ><img src={leftButton} alt="prev button"  /></button>
        <button onClick={nextSlide}><img src={rightButton} alt="next button" /></button>
      </div>
    </>
  );
}