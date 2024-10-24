import React from 'react';
import styled from 'styled-components';
import { MdRestaurant } from "react-icons/md";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: white;
  }
  a:hover{
    color: #F4511F;
  }

  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    div {
      margin-bottom: 2rem;
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  padding-top: 1.5rem;
  font-size: 0.9rem;
  width: 100%;
  border-top: 1px solid #555;
  margin-top: 2rem;
`;
const Span = styled.span`
     color:#F4511F;
`
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

 const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
`;
const Paragraph = styled.p`
    width: 200px;

    @media (max-width: 768px) {
        width: 100%;
    }

    
`

function Footer() {
  return (
    <FooterContainer>
      <div>
      <LogoDiv>
        <MdRestaurant size={32} />
        <Logo>FoodieWeb</Logo>
      </LogoDiv>
        <Paragraph>Indulge in a symphony of flavors where each plate is a canvas of culinary experience.</Paragraph>
      </div>

      <div>
        <h1>Links</h1>
        <ul>
          <li><a href="#dishes">Dishes</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          <li><a href="#">Our Dishes</a></li>
          <li><a href="#menu">Premium Menu</a></li>
        </ul>
      </div>

      <div>
        <h1>Contact Us</h1>
        <ul>
          <li>FoodieWeb@gmail.com</li>
          <li>+123-456-789</li>
          <li>Social Media</li>
        </ul>
      </div>

      <Copyright>&copy; 2024 FoodieWeb | Developed by <Span>Champion Programmers</Span> | All rights reserved.</Copyright>
    </FooterContainer>
  );
}

export default Footer;
