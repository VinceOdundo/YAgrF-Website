import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderWrapper = styled.div`
  position: relative;
  height: 80vh;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideContent = styled.div`
  text-align: center;
  color: var(--accent-color);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

const SlideTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SlideSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const SlideButton = styled.a`
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

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--accent-color);
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;

const slides = [
  {
    image: "/api/placeholder/1200/800",
    title: "Empowering Youth, Nourishing Communities",
    subtitle: "Join the Agri-Force: Cultivating Change, One Seed at a Time",
    cta: "Sow the Seeds of Change",
    link: "/get-involved",
  },
  {
    image: "/api/placeholder/1200/800",
    title: "From Farm to Table, Youth Leading the Way",
    subtitle: "YAgrF: Growing a Sustainable Future for Kenya",
    cta: "Explore Our Impact",
    link: "/about#impact",
  },
  {
    image: "/api/placeholder/1200/800",
    title: "Your Support Harvests a Brighter Tomorrow",
    subtitle: "Invest in Kenyan Youth, Invest in Food Security",
    cta: "Donate Now",
    link: "/get-involved#donate",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SliderWrapper>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          active={index === currentSlide}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <SlideContent>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
            <SlideButton href={slide.link}>{slide.cta}</SlideButton>
          </SlideContent>
        </Slide>
      ))}
      <SliderButton className="prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </SliderButton>
      <SliderButton className="next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </SliderButton>
    </SliderWrapper>
  );
};

export default HeroSlider;
