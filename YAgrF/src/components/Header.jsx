import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Home, Users, Briefcase, Heart, Book, Mail } from "lucide-react";
import logo from "../assets/yagrf logo_.png";

const Logo = styled.img`
  width: 80px;
  height: auto;
`;
const HeaderWrapper = styled.header`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo_ = styled(Link)`
  color: var(--accent-color);
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 1.5rem;
`;

const NavLink = styled(Link)`
  color: var(--accent-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/" src={logo} alt="Youth Agri-Force Logo" />
        <Logo_ to="/">Youth Agri-Force</Logo_>
        <NavLinks>
          <NavItem>
            <NavLink to="/">
              <Home size={18} /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">
              <Users size={18} /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/programs">
              <Briefcase size={18} /> Programs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/get-involved">
              <Heart size={18} /> Get Involved
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/news">
              <Book size={18} /> News & Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">
              <Mail size={18} /> Contact
            </NavLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
