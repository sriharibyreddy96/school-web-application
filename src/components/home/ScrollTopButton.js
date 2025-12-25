// ScrollTop.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #003057;
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #01182b;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <ScrollTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollTopButton>
      )}
    </>
  );
};

export default ScrollTop;
