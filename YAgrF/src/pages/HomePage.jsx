import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import KeyPrograms from "../components/KeyPrograms";
import ImpactStories from "../components/ImpactStories";
import GetInvolved from "../components/GetInvolved";
import LatestNews from "../components/LatestNews";

const PageWrapper = styled.div`
  background: linear-gradient(135deg, #e0e5ec 0%, #e0e5ec 100%);
  min-height: 100vh;
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  color: var(--primary-color);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const CTAButton = styled(Link)`
  background: linear-gradient(
    45deg,
    var(--secondary-color),
    var(--primary-color)
  );
  color: var(--accent-color);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <HeroSlider />
      <Section>
        <SectionTitle>About YAgrF</SectionTitle>
        <AboutSection />
        <CTAButton to="/about">
          Learn More <ChevronRight size={18} />
        </CTAButton>
      </Section>

      <Section>
        <SectionTitle>Key Programs</SectionTitle>
        <KeyPrograms />
        <CTAButton to="/programs">
          Explore Programs <ChevronRight size={18} />
        </CTAButton>
      </Section>

      <Section>
        <SectionTitle>Impact Stories</SectionTitle>
        <ImpactStories />
        <CTAButton to="/about#impact">
          See More Stories <ChevronRight size={18} />
        </CTAButton>
      </Section>

      <Section>
        <SectionTitle>Get Involved</SectionTitle>
        <GetInvolved />
        <CTAButton to="/get-involved">
          Join Us <ChevronRight size={18} />
        </CTAButton>
      </Section>

      <Section>
        <SectionTitle>Latest News & Blog</SectionTitle>
        <LatestNews />
        <CTAButton to="/news">
          Read More <ChevronRight size={18} />
        </CTAButton>
      </Section>
    </PageWrapper>
  );
};

export default HomePage;
