import React from 'react';
import styled from 'styled-components';
import image from "../assets/img/img2.jpg";
import { FaStar } from "react-icons/fa";
import Button from './Button';

const DishContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  width: 230px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  transition: transform 0.2s;

  @media(min-width:768px) {
    &:hover {
        transform: scale(1.05);
  }
}

  @media (max-width: 768px) {
    width: 70%;
    margin: 1rem auto;
  }
`;

const DishImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover; 
`;

const DishInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

const DishTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0.5rem 0;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: #F4511F;
  font-weight: bold;
`;

function SingleDish({url}) {
  return (
    <DishContainer>
      <DishImage src={url} alt='Tasty Dish' />
      <DishInfo>
        <DishTitle>Tasty Dish</DishTitle>
        <StarsContainer>
          <FaStar color='#F4511F' />
          <FaStar color='#F4511F' />
          <FaStar color='#F4511F' />
          <FaStar color='#F4511F' />
        </StarsContainer>
        <Price>$20.00</Price>
        <Button>Buy Now</Button>
      </DishInfo>
    </DishContainer>
  );
}

export default SingleDish;
