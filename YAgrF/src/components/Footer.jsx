import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FooterWrapper = styled.footer`
  background-color: var(--primary-color);
  color: var(--accent-color);
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: var(--accent-color);
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: var(--accent-color);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h3>Youth Agri-Force</h3>
          <p>Empowering youth through sustainable agriculture in Kenya.</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/programs">Our Programs</FooterLink>
          <FooterLink to="/get-involved">Get Involved</FooterLink>
          <FooterLink to="/news">News & Blog</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </FooterSection>
        <FooterSection>
          <h3>Contact</h3>
          <p>123 Farming Street, Nairobi, Kenya</p>
          <p>Phone: +254 123 456 789</p>
          <p>Email: info@yagrf.org</p>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <SocialLinks>
            <SocialIcon
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Youth Agri-Force. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
