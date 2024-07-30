import React, { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StoriesWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const StoryCard = styled.div`
  background-color: var(--accent-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StoryImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const StoryQuote = styled.blockquote`
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const StoryAuthor = styled.p`
  font-weight: bold;
  color: var(--primary-color);
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--secondary-color);
  color: var(--accent-color);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
  }

  &.prev {
    left: -50px;
  }

  &.next {
    right: -50px;
  }
`;

const stories = [
  {
    image: "/api/placeholder/150/150",
    quote:
      "YAgrF has given me the skills and confidence to start my own sustainable farm. I'm now able to support my family and contribute to my community's food security.",
    author: "Jane Muthoni, 24",
  },
  {
    image: "/api/placeholder/150/150",
    quote:
      "Through the Youth Agri-Force program, I've learned innovative farming techniques that have doubled my crop yield. I'm proud to be part of Kenya's agricultural transformation.",
    author: "David Ochieng, 22",
  },
  {
    image: "/api/placeholder/150/150",
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
        <StoryQuote>"{stories[currentStory].quote}"</StoryQuote>
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
