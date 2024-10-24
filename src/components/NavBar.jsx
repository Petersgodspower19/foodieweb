import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import Button from './Button';
import { Links } from './Header';


const SideBar = styled.div`
  position: fixed; 
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.9); 
  backdrop-filter: blur(8px); 
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 10001;
  overflow-y: auto;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')}; 
  opacity: ${({ open }) => (open ? '1' : '0')}; 
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function NavBar({ handleClick, open }) {
  return (
    <SideBar open={open}>
      <IoMdClose size={32} onClick={handleClick} />
      <NavBarContainer>
        {/* Use anchor links to scroll to sections */}
        <Links href="#home" onClick={handleClick}>Home</Links>
        <Links href="#dishes" onClick={handleClick}>Dishes</Links>
        <Links href="#about">About</Links>
        <Links href='#reviews'>Reviews</Links>
        <Button>Login</Button>
      </NavBarContainer>
    </SideBar>
  );
}

export default NavBar;
