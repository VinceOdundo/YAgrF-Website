import React from "react";
import styled from "styled-components";
import { Users, ShoppingBasket, Leaf } from "lucide-react";

const ProgramsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #e0e5ec;
  border-radius: 20px;
`;

const ProgramCard = styled.div`
  background-color: #e0e5ec;
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 12px 12px 20px rgb(163, 177, 198, 0.8),
      -12px -12px 20px rgba(255, 255, 255, 0.8);
  }
`;

const ProgramIcon = styled.div`
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 50%;
  display: inline-block;
  box-shadow: inset 5px 5px 10px rgb(163, 177, 198, 0.6),
    inset -5px -5px 10px rgba(255, 255, 255, 0.5);
`;

const ProgramTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const ProgramDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
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
