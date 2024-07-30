import React from "react";
import styled from "styled-components";
import { UserPlus, DollarSign, Handshake } from "lucide-react";

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  color: var(--primary-color);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SectionContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: var(--secondary-color);
`;

const TextContent = styled.div`
  flex: 1;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: var(--secondary-color);
  color: var(--accent-color);
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const GetInvolvedPage = () => {
  return (
    <PageWrapper>
      <PageTitle>Get Involved</PageTitle>

      <Section id="volunteer">
        <SectionTitle>Volunteer</SectionTitle>
        <SectionContent>
          <IconWrapper>
            <UserPlus size={48} />
          </IconWrapper>
          <TextContent>
            <Paragraph>
              Share your skills and passion for agriculture by volunteering with
              YAgrF. We offer a variety of opportunities to get involved, from
              working on our demonstration farm to mentoring young farmers.
            </Paragraph>
            <Paragraph>
              Whether you're an experienced farmer, an agricultural expert, or
              simply passionate about sustainable development, your contribution
              can make a real difference in the lives of young people across
              Kenya.
            </Paragraph>
            <CTAButton href="#volunteer-form">Apply to Volunteer</CTAButton>
          </TextContent>
        </SectionContent>
      </Section>

      <Section id="donate">
        <SectionTitle>Donate</SectionTitle>
        <SectionContent>
          <IconWrapper>
            <DollarSign size={48} />
          </IconWrapper>
          <TextContent>
            <Paragraph>
              Your donation helps us provide training, resources, and support to
              young farmers, ensuring a sustainable and prosperous future for
              Kenya. Every contribution, no matter how small, makes a
              difference.
            </Paragraph>
            <Paragraph>
              By donating to YAgrF, you're investing in the future of Kenyan
              agriculture and empowering the next generation of farmers and
              agripreneurs.
            </Paragraph>
            <CTAButton href="#donation-form">Make a Donation</CTAButton>
          </TextContent>
        </SectionContent>
      </Section>

      <Section id="partner">
        <SectionTitle>Partner with Us</SectionTitle>
        <SectionContent>
          <IconWrapper>
            <Handshake size={48} />
          </IconWrapper>
          <TextContent>
            <Paragraph>
              We welcome partnerships with organizations, businesses, and
              individuals who share our vision. Together, we can create
              innovative solutions to address the challenges facing Kenya's
              agricultural sector.
            </Paragraph>
            <Paragraph>
              Whether you're interested in sponsoring a program, providing
              resources, or collaborating on a project, we'd love to explore how
              we can work together to make a lasting impact.
            </Paragraph>
            <CTAButton href="#partnership-inquiry">
              Inquire About Partnerships
            </CTAButton>
          </TextContent>
        </SectionContent>
      </Section>
    </PageWrapper>
  );
};

export default GetInvolvedPage;
