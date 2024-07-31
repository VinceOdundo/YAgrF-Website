import React from "react";
import styled, { keyframes } from "styled-components";
import { Trees } from "lucide-react";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AboutWrapper = styled.div`
   {
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h3`
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.8);
`;

const IconWrapper = styled.div`
  flex: 0 0 auto;
  font-size: 4rem;
  color: var(--secondary-color);
  background: linear-gradient(135deg, #91b71f, #0d3c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 5s ease infinite;
`;

const AboutSection = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <AboutTitle>Our Roots Run Deep</AboutTitle>
        <AboutText>
          YAgrF is a youth-led initiative committed to transforming Kenya's
          agricultural landscape. We empower young people with the skills and
          resources they need to become successful agripreneurs, ensuring food
          security and environmental sustainability for generations to come.
        </AboutText>
      </AboutContent>
      <IconWrapper>
        <Trees size={96} />
      </IconWrapper>
    </AboutWrapper>
  );
};

export default AboutSection;
