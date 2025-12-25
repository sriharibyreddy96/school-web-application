import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import local images
import image1 from '../../assets/slide1.webp';
import image2 from '../../assets/slide2.jpeg';
import image3 from '../../assets/slide3.jpeg';
import image4 from '../../assets/slide4.jpeg';


// Array of images
const images = [image1, image2, image3, image4];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <ImageSlide key={index} image={image} active={index === currentIndex} />
      ))}
      <NavigationButton direction="left" onClick={prevSlide}>
        <FaChevronLeft />
      </NavigationButton>
      <NavigationButton direction="right" onClick={nextSlide}>
        <FaChevronRight />
      </NavigationButton>
      <DotsContainer>
        {images.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => handleDotClick(index)} />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};


const SliderContainer = styled.div`
  position: relative;
  height: 90vh; /* Default height for larger screens */
  overflow: hidden;

  @media (max-width: 768px) {
    height: 60vh; /* Change height for mobile view */
  }

  @media (max-width: 480px) {
    height: 50vh; /* Change height for smaller mobile view */
  }
`;

const ImageSlide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #ddd;
  }

  ${(props) => (props.direction === 'left' ? 'left: 20px;' : 'right: 20px;')}
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? 'white' : '#bbb')};
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export default Slider;