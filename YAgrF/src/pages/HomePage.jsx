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

const Section = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  color: var(--primary-color);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  background-color: var(--secondary-color);
  color: var(--accent-color);
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
