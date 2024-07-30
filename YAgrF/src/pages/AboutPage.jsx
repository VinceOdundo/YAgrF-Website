import React from "react";
import styled from "styled-components";
import { Users, FileText, Handshake } from "lucide-react";

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 3rem;
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
`;

const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const TeamMemberName = styled.h3`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  color: var(--secondary-color);
`;

const FinancialReport = styled.div`
  background-color: var(--accent-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const PartnerLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const PartnerLogo = styled.img`
  max-width: 150px;
  height: auto;
`;

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageTitle>About Youth Agri-Force</PageTitle>

      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <p>
          Founded in 2021, YAgrF emerged from a shared vision: to empower Kenyan
          youth through sustainable agriculture. We believe that by investing in
          young people, we can create a thriving agricultural sector that
          nourishes communities, protects the environment, and builds a
          prosperous future for Kenya.
        </p>
      </Section>

      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <TeamMemberImage src="/api/placeholder/150/150" alt="John Doe" />
            <TeamMemberName>John Doe</TeamMemberName>
            <TeamMemberRole>Executive Director</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src="/api/placeholder/150/150" alt="Jane Smith" />
            <TeamMemberName>Jane Smith</TeamMemberName>
            <TeamMemberRole>Program Manager</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage
              src="/api/placeholder/150/150"
              alt="David Kimani"
            />
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

      <Section>
        <SectionTitle>Our Partners</SectionTitle>
        <PartnerLogos>
          <PartnerLogo src="/api/placeholder/150/75" alt="Partner 1" />
          <PartnerLogo src="/api/placeholder/150/75" alt="Partner 2" />
          <PartnerLogo src="/api/placeholder/150/75" alt="Partner 3" />
          <PartnerLogo src="/api/placeholder/150/75" alt="Partner 4" />
        </PartnerLogos>
      </Section>
    </PageWrapper>
  );
};

export default AboutPage;
