// Card.js
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 80%;
  border: 1px solid gray;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const CardData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 10px 0;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffcb00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003057;
  }
`;

const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <CardData>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button>Learn More</Button>
      </CardData>
    </CardContainer>
  );
};

export default Card;
