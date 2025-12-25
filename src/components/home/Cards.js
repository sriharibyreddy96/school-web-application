// Cards.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

import image1 from '../../assets/scl-branch1.jpg';
import image2 from '../../assets/scl-branch2.jpg';
import image3 from '../../assets/scl-branch3.jpg';
import image4 from '../../assets/scl-branch4.jpg';

const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  padding: 50px 20px;
`;

const Cards = () => {
  const cardData = [
    {
      image: image1,
      title: 'RLP International School, Hyderabad',
      description: 'NanakramGuda, Near Hyderabad – 500081.',
    },
    {
      image: image2,
      title: 'RLP International School, Bengaluru',
      description: 'Varthur Road, Near Dommasandra Circle, Sarjapur Hobli – 562125,',
    },
    {
      image: image3,
      title: 'RLP International School, Visakhapatnam',
      description: 'NH 5 Road, Behind HP Petrol bunk, Maharajpeta Junction, Tagarapuvalasa – 531162',
    },
    {
      image: image4,
      title: 'RLP International School, Vijayawada',
      description: 'Vijayawada Next to Thunderzone Amusement Park – 140307',
    },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Our Branches</h2>
      <CardsSection>
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </CardsSection>
    </div>
  );
};

export default Cards;
