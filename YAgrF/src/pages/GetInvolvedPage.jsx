import React from "react";
import styled, { keyframes } from "styled-components";
import { UserPlus, DollarSign, Handshake } from "lucide-react";

const auroraBackground = keyframes`
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

const PageWrapper = styled.div`
  padding: 7rem;
  background: linear-gradient(
    -135deg,
    rgba(13, 60, 0, 0.7),
    rgba(145, 183, 31, 0.7),
    rgba(13, 60, 0, 0.7)
  );
  background-size: 400% 400%;
  animation: ${auroraBackground} 15s ease infinite;
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
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
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(
    45deg,
    var(--secondary-color),
    var(--primary-color)
  );
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
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
