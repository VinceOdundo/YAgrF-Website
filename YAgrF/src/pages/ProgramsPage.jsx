import React from "react";
import styled from "styled-components";
import { Users, ShoppingBasket, Leaf } from "lucide-react";

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

const ProgramSection = styled.section`
  margin-bottom: 4rem;
`;

const ProgramTitle = styled.h2`
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`;

const ProgramContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProgramImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProgramDescription = styled.div`
  flex: 1;
`;

const TestimonialBox = styled.blockquote`
  background-color: var(--accent-color);
  border-left: 5px solid var(--secondary-color);
  padding: 1rem;
  margin-top: 1rem;
  font-style: italic;
`;

const ProgramsPage = () => {
  return (
    <PageWrapper>
      <PageTitle>Our Programs</PageTitle>

      <ProgramSection>
        <ProgramTitle>
          <Users size={32} />
          Youth Agri-Force Pilot Project
        </ProgramTitle>
        <ProgramContent>
          <ProgramImage
            src="/api/placeholder/300/200"
            alt="Youth Agri-Force Pilot Project"
          />
          <ProgramDescription>
            <p>
              Our flagship program provides comprehensive training, mentorship,
              and resources to aspiring young farmers. We equip them with the
              skills and knowledge they need to establish successful
              agricultural enterprises, creating jobs, boosting food security,
              and promoting environmental sustainability.
            </p>
            <p>Key components of the program include:</p>
            <ul>
              <li>Hands-on agricultural training</li>
              <li>Business management and entrepreneurship skills</li>
              <li>Access to land and farming resources</li>
              <li>Ongoing mentorship and support</li>
            </ul>
            <TestimonialBox>
              "The Youth Agri-Force program has transformed my life. I now run
              my own successful farm and employ other young people in my
              community." - John Mutua, Program Graduate
            </TestimonialBox>
          </ProgramDescription>
        </ProgramContent>
      </ProgramSection>

      <ProgramSection>
        <ProgramTitle>
          <ShoppingBasket size={32} />
          Community Food Distribution
        </ProgramTitle>
        <ProgramContent>
          <ProgramImage
            src="/api/placeholder/300/200"
            alt="Community Food Distribution"
          />
          <ProgramDescription>
            <p>
              We believe that everyone deserves access to nutritious food.
              Through our community food distribution program, we work with
              local farmers and partners to ensure that vulnerable populations
              receive fresh, healthy produce, improving their well-being and
              strengthening community resilience.
            </p>
            <p>Our approach includes:</p>
            <ul>
              <li>Partnering with local farmers to source fresh produce</li>
              <li>Establishing community distribution centers</li>
              <li>Providing nutrition education and cooking workshops</li>
              <li>Implementing food waste reduction strategies</li>
            </ul>
            <TestimonialBox>
              "The food distribution program has made a huge difference in our
              community. We now have access to fresh vegetables that we couldn't
              afford before." - Mary Wanjiru, Program Beneficiary
            </TestimonialBox>
          </ProgramDescription>
        </ProgramContent>
      </ProgramSection>

      <ProgramSection>
        <ProgramTitle>
          <Leaf size={32} />
          Environmental Stewardship
        </ProgramTitle>
        <ProgramContent>
          <ProgramImage
            src="/api/placeholder/300/200"
            alt="Environmental Stewardship"
          />
          <ProgramDescription>
            <p>
              We are committed to protecting our planet and promoting
              sustainable farming practices. Our environmental stewardship
              initiatives focus on soil conservation, water management,
              biodiversity preservation, and climate-smart agriculture.
            </p>
            <p>Key initiatives include:</p>
            <ul>
              <li>Promoting agroforestry and permaculture techniques</li>
              <li>Implementing water conservation and harvesting systems</li>
              <li>
                Encouraging the use of organic fertilizers and pest control
                methods
              </li>
              <li>Educating farmers on climate change adaptation strategies</li>
            </ul>
            <TestimonialBox>
              "Thanks to YAgrF's environmental program, I've learned how to farm
              sustainably and protect our local ecosystem. It's a win-win for me
              and the environment." - Peter Ochieng, Participating Farmer
            </TestimonialBox>
          </ProgramDescription>
        </ProgramContent>
      </ProgramSection>
    </PageWrapper>
  );
};

export default ProgramsPage;
