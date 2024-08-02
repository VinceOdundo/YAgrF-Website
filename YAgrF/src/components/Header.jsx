import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/yagrf logo_.png";

import styled, { keyframes } from "styled-components";
import {
  Home,
  Users,
  Briefcase,
  Heart,
  Book,
  Mail,
  Menu,
  X,
} from "lucide-react";

const aurora = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderWrapper = styled.header`
  background: linear-gradient(
    45deg,
    rgba(13, 60, 0, 0.7),
    rgba(145, 183, 31, 0.7),
    rgba(13, 60, 0, 0.7)
  );
  background-size: 200% 200%;
  animation: ${aurora} 15s ease infinite;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-right: 1rem;
`;

const LogoText = styled(Link)`
  color: var(--accent-color);
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(13, 60, 0, 0.9);
    backdrop-filter: blur(10px);
    padding: 1rem;
  }
`;

const NavItem = styled.li`
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: var(--accent-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  &:hover {
    color: var(--secondary-color);
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--accent-color);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [$isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!$isOpen);

  return (
    <HeaderWrapper
      style={{ background: scrolled ? "rgba(13, 60, 0, 0.9)" : "" }}
    >
      <Nav>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo src={logo} alt="Youth Agri-Force Logo" />
          <LogoText to="/">Youth Agri-Force</LogoText>
        </div>
        <MenuButton onClick={toggleMenu}>
          {$isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>
        <NavLinks $isOpen={$isOpen}>
          <NavItem>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <Home size={18} /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              <Users size={18} /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/programs" onClick={() => setIsOpen(false)}>
              <Briefcase size={18} /> Programs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/get-involved" onClick={() => setIsOpen(false)}>
              <Heart size={18} /> Get Involved
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/news" onClick={() => setIsOpen(false)}>
              <Book size={18} /> News & Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              <Mail size={18} /> Contact
            </NavLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
