import React from "react";
import styled from "styled-components";
import { Users, ShoppingBasket, Leaf } from "lucide-react";
import ProgPhoto1 from "../assets/aggra_.png";
import ProgPhoto2 from "../assets/aggra.png";

const PageWrapper = styled.div`
  padding: 7rem;
  background: linear-gradient(135deg, #91b71f 0%, #fabf11 100%);
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProgramSection = styled.section`
  margin-bottom: 4rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const ProgramTitle = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
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
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProgramDescription = styled.div`
  flex: 1;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #0d3c00;
      }
    }
  }
`;

const TestimonialBox = styled.blockquote`
  background-color: rgba(255, 255, 255, 0.1);
  border-left: 5px solid #0d3c00;
  padding: 1.5rem;
  margin-top: 1.5rem;
  font-style: italic;
  border-radius: 0 15px 15px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProgramsPage = () => {
  return (
    <PageWrapper>
      <PageTitle>Our Programs</PageTitle>

      <ProgramSection>
        <ProgramTitle>
          <Users size={40} />
          Youth Agri-Force Pilot Project
        </ProgramTitle>
        <ProgramContent>
          <ProgramImage src={ProgPhoto1} alt="Youth Agri-Force Pilot Project" />
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
          <ShoppingBasket size={40} />
          Community Food Distribution
        </ProgramTitle>
        <ProgramContent>
          <ProgramImage src={ProgPhoto2} alt="Community Food Distribution" />
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
          <Leaf size={40} />
          Environmental Stewardship
        </ProgramTitle>
        <ProgramContent>
          <ProgramImage src={ProgPhoto1} alt="Environmental Stewardship" />
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
