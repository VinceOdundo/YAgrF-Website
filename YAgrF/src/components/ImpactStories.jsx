import React, { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import propImage from "../assets/Reagan O pic.jpg";
import propImage1 from "../assets/human pic.jpg";
import propImage2 from "../assets/edwin photo.jpg";

const StoriesWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  border: 1px solid rgba(255, 255, 255, 0);
`;

const StoryCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.57);
  }
`;

const StoryImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid var(--secondary-color);
`;

const StoryQuote = styled.blockquote`
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  position: relative;

  &::before,
  &::after {
    content: '"';
    font-size: 3rem;
    color: var(--secondary-color);
    opacity: 0.3;
    position: absolute;
  }

  &::before {
    top: -20px;
    left: -10px;
  }

  &::after {
    bottom: -40px;
    right: -10px;
  }
`;

const StoryAuthor = styled.p`
  font-weight: bold;
  color: var(--primary-color);
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color)
  );
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &.prev {
    left: -20px;
  }

  &.next {
    right: -20px;
  }
`;

const stories = [
  {
    image: propImage,
    quote:
      "YAgrF has given me the skills and confidence to start my own sustainable farm. I'm now able to support my family and contribute to my community's food security.",
    author: "Jane Muthoni, 24",
  },
  {
    image: propImage1,
    quote:
      "Through the Youth Agri-Force program, I've learned innovative farming techniques that have doubled my crop yield. I'm proud to be part of Kenya's agricultural transformation.",
    author: "David Ochieng, 22",
  },
  {
    image: propImage2,
    quote:
      "YAgrF's mentorship program connected me with experienced farmers who guided me in setting up my agribusiness. Their support has been invaluable in my journey.",
    author: "Grace Wanjiru, 26",
  },
];

const ImpactStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <StoriesWrapper>
      <StoryCard>
        <StoryImage
          src={stories[currentStory].image}
          alt={stories[currentStory].author}
        />
        <StoryQuote>{stories[currentStory].quote}</StoryQuote>
        <StoryAuthor>{stories[currentStory].author}</StoryAuthor>
      </StoryCard>
      <NavButton className="prev" onClick={prevStory}>
        <ChevronLeft size={24} />
      </NavButton>
      <NavButton className="next" onClick={nextStory}>
        <ChevronRight size={24} />
      </NavButton>
    </StoriesWrapper>
  );
};

export default ImpactStories;
