import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FileText } from "lucide-react";
import propImage from "../assets/Reagan O pic.jpg";
import propImage1 from "../assets/human pic.jpg";
import propImage2 from "../assets/edwin photo.jpg";
import partnerLogo from "../assets/yagrf logo_.png";

const PageWrapper = styled.div`
  padding: 7rem;
  background: linear-gradient(135deg, #e0e5ec 0%, #e0e5ec 100%);
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;
const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #e0e5ec;
`;

const Section1 = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 20px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;

const SectionTitle = styled.h2`
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 15px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TeamMemberName = styled.h3`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  color: var(--secondary-color);
`;

const FinancialReport = styled.div`
  background-color: #e0e5ec;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReportIcon = styled.div`
  color: var(--secondary-color);
  font-size: 3rem;
`;

const ReportText = styled.div`
  flex: 1;
  margin-left: 2rem;
`;

const PartnerLogosWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

const PartnerLogos = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const PartnerLogo = styled.img`
  width: 33.33%;
  height: auto;
  padding: 1rem;
  transition: all 0.3s ease;
  ${(props) =>
    props.isFocused
      ? `
    transform: scale(1.1);
    filter: none;
  `
      : `
    filter: grayscale(100%);
  `}
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--secondary-color)" : "var(--primary-color)"};
  margin: 0 5px;
  border: none;
  cursor: pointer;
  box-shadow: 3px 3px 6px rgb(163, 177, 198, 0.6),
    -3px -3px 6px rgba(255, 255, 255, 0.5);
`;

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const partners = [
    { id: 1, logo: partnerLogo, alt: "Partner 1" },
    { id: 2, logo: partnerLogo, alt: "Partner 2" },
    { id: 3, logo: partnerLogo, alt: "Partner 3" },
    { id: 4, logo: partnerLogo, alt: "Partner 4" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % partners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <PageWrapper>
      <PageTitle>About Youth Agri-Force</PageTitle>

      <Section1>
        <SectionTitle>Our Story</SectionTitle>
        <p>
          Founded in 2021, YAgrF emerged from a shared vision: to empower Kenyan
          youth through sustainable agriculture. We believe that by investing in
          young people, we can create a thriving agricultural sector that
          nourishes communities, protects the environment, and builds a
          prosperous future for Kenya.
        </p>
      </Section1>

      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <TeamMemberImage src={propImage2} alt="John Doe" />
            <TeamMemberName>John Doe</TeamMemberName>
            <TeamMemberRole>Executive Director</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={propImage} alt="Jane Smith" />
            <TeamMemberName>Jane Smith</TeamMemberName>
            <TeamMemberRole>Program Manager</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={propImage1} alt="David Kimani" />
            <TeamMemberName>David Kimani</TeamMemberName>
            <TeamMemberRole>Agricultural Specialist</TeamMemberRole>
          </TeamMember>
        </TeamGrid>
      </Section>

      <Section>
        <SectionTitle>Financial Transparency</SectionTitle>
        <FinancialReport>
          <ReportIcon>
            <FileText size={48} />
          </ReportIcon>
          <ReportText>
            <h3>Annual Report 2023</h3>
            <p>
              View our latest annual report to see how your support is making a
              difference.
            </p>
          </ReportText>
          <a href="/annual-report-2023.pdf" download>
            Download PDF
          </a>
        </FinancialReport>
      </Section>

      <Section1>
        <SectionTitle>Our Partners</SectionTitle>
        <PartnerLogosWrapper>
          <PartnerLogos
            style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
          >
            {partners.map((partner, index) => (
              <PartnerLogo
                key={partner.id}
                src={partner.logo}
                alt={partner.alt}
                isFocused={
                  index === currentSlide + 1 ||
                  (currentSlide === partners.length - 1 && index === 0)
                }
              />
            ))}
          </PartnerLogos>
        </PartnerLogosWrapper>
        <NavigationDots>
          {partners.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </NavigationDots>
      </Section1>
    </PageWrapper>
  );
};

export default AboutPage;
