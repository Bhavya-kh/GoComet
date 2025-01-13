import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;  
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoText = styled.div`
  font-size: 20px;
  font-weight: bold;
  span:first-of-type {
    color: #0066cc;
  }
  span:last-of-type {
    color: #333;
  }
`;

const NavLinks = styled.div`
  display: flex;
  margin-left: auto;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    color: #0066cc;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 8px;
  width: 40px;
  height: 40px;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 2px;
  background: #333;
  position: relative;
  transition: all 0.3s ease;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #333;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }

  ${props => props.isOpen && css`
    background: transparent;
    
    &::before {
      transform: rotate(45deg);
      top: 0;
    }
    
    &::after {
      transform: rotate(-45deg);
      top: 0;
    }
  `}
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileNavLink = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #0066cc;
  }
`;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <img src ='https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/286ebfc6c0
7d6a38969da05b673b21be6e89eab3/book-my-hotel-logo.svg' alt="Book My Hotel" />
        
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Hotels</NavLink>
          <NavLink href="#">Places</NavLink>
          <NavLink href="#">Sign in</NavLink>
        </NavLinks>

        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HamburgerIcon isOpen={isMenuOpen} />
        </HamburgerButton>
      </Nav>

      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLink href="#">Home</MobileNavLink>
        <MobileNavLink href="#">Hotels</MobileNavLink>
        <MobileNavLink href="#">Places</MobileNavLink>
        <MobileNavLink href="#">Sign in</MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default NavBar;