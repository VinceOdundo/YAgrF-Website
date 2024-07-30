import React from "react";
import styled from "styled-components";
import { UserPlus, DollarSign, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const InvolvedWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const InvolvedCard = styled.div`
  background-color: var(--accent-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const InvolvedIcon = styled.div`
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const InvolvedTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const InvolvedDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const InvolvedButton = styled(Link)`
  display: inline-block;
  background-color: var(--secondary-color);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const involvementOptions = [
  {
    icon: <UserPlus size={32} />,
    title: "Volunteer",
    description: "Share your skills and passion by volunteering with YAgrF.",
    link: "/get-involved#volunteer",
  },
  {
    icon: <DollarSign size={32} />,
    title: "Donate",
    description: "Support our mission with a financial contribution.",
    link: "/get-involved#donate",
  },
  {
    icon: <Handshake size={32} />,
    title: "Partner",
    description:
      "Collaborate with us to create innovative agricultural solutions.",
    link: "/get-involved#partner",
  },
];

const GetInvolved = () => {
  return (
    <InvolvedWrapper>
      {involvementOptions.map((option, index) => (
        <InvolvedCard key={index}>
          <InvolvedIcon>{option.icon}</InvolvedIcon>
          <InvolvedTitle>{option.title}</InvolvedTitle>
          <InvolvedDescription>{option.description}</InvolvedDescription>
          <InvolvedButton to={option.link}>Learn More</InvolvedButton>
        </InvolvedCard>
      ))}
    </InvolvedWrapper>
  );
};

export default GetInvolved;
