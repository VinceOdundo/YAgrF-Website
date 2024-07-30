import React from "react";
import styled from "styled-components";
import { Users, ShoppingBasket, Leaf } from "lucide-react";

const ProgramsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ProgramCard = styled.div`
  background-color: var(--accent-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProgramIcon = styled.div`
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const ProgramTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const ProgramDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const programs = [
  {
    icon: <Users size={32} />,
    title: "Youth Agri-Force Pilot Project",
    description:
      "Equipping aspiring farmers with hands-on training, mentorship, and access to land and resources.",
  },
  {
    icon: <ShoppingBasket size={32} />,
    title: "Community Food Distribution",
    description:
      "Ensuring access to nutritious food for vulnerable populations through sustainable farming and distribution.",
  },
  {
    icon: <Leaf size={32} />,
    title: "Environmental Stewardship",
    description:
      "Promoting eco-friendly farming practices that protect our land, water, and biodiversity.",
  },
];

const KeyPrograms = () => {
  return (
    <ProgramsWrapper>
      {programs.map((program, index) => (
        <ProgramCard key={index}>
          <ProgramIcon>{program.icon}</ProgramIcon>
          <ProgramTitle>{program.title}</ProgramTitle>
          <ProgramDescription>{program.description}</ProgramDescription>
        </ProgramCard>
      ))}
    </ProgramsWrapper>
  );
};

export default KeyPrograms;
