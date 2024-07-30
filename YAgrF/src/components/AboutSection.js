import React from "react";
import styled from "styled-components";
import { Tree } from "lucide-react";

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const IconWrapper = styled.div`
  flex: 0 0 auto;
  font-size: 4rem;
  color: var(--secondary-color);
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
        <Tree size={64} />
      </IconWrapper>
    </AboutWrapper>
  );
};

export default AboutSection;
