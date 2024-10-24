import React from 'react';
import { MdRestaurant } from "react-icons/md";
import Button from './Button';
import styled from 'styled-components';
import { IoMenu } from "react-icons/io5";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
  z-index: 1000;
  overflow: hidden;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMenuIcon = styled(IoMenu)`
  display: none;
  cursor: pointer;

  @media(max-width: 768px) {
    display: block;
  }
`;
export const Links = styled.a`
  color:black;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: #F4511F;
  }
`

function Header({ handleClick }) {
  return (
    <StyledHeader>
      <LogoDiv>
        <MdRestaurant size={32} />
        <Logo>FoodieWeb</Logo>
      </LogoDiv>

      <LinksContainer>
        <Links href="#home">Home</Links>
        <Links href="#dishes">Dishes</Links>
        <Links href='#about'>About</Links>
        <Links href='#reviews'>Reviews</Links>
        <Button>Login</Button>
      </LinksContainer>

      <StyledMenuIcon size={32} onClick={handleClick} />
    </StyledHeader>
  );
}

export default Header;
