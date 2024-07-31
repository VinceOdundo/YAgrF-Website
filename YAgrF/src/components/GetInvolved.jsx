import React from "react";
import styled from "styled-components";
import { UserPlus, DollarSign, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const InvolvedWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
`;

const InvolvedCard = styled.div`
  background-color: #e0e5ec;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 12px 12px 20px rgb(163, 177, 198, 0.8),
      -12px -12px 20px rgba(255, 255, 255, 0.6);
  }
`;

const InvolvedIcon = styled.div`
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  display: inline-block;
  padding: 1rem;
  border-radius: 50%;
  background: #e0e5ec;
  box-shadow: inset 5px 5px 10px #b8bec5, inset -5px -5px 10px #ffffff;
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
  color: #666;
`;

const InvolvedButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(
    135deg,
    var(--secondary-color),
    var(--primary-color)
  );
  color: var(--accent-color);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 10px #b8b9be, -5px -5px 10px #ffffff;
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 2px 2px 5px #b8b9be, inset -2px -2px 5px #ffffff;
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
