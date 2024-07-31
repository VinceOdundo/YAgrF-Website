import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import brgImage from "../assets/brg.jpg";
import bgImage from "../assets/bg.png";
import brg2Image from "../assets/brg2.jpg";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 120vh;
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(66, 211, 146, 0.3),
      rgba(25, 84, 123, 0.3)
    );
    animation: ${gradientAnimation} 15s ease infinite;
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  text-align: center;
  color: var(--accent-color);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
  max-width: 80%;
`;

const SlideTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SlideSubtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const SlideButton = styled.a`
  background: linear-gradient(
    45deg,
    var(--secondary-color),
    var(--primary-color)
  );
  color: var(--accent-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: var(--accent-color);
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
  border-radius: 50%;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 2rem;
  }

  &.next {
    right: 2rem;
  }
`;

const slides = [
  {
    image: brgImage,
    title: "Empowering Youth, Nourishing Communities",
    subtitle: "Join the Agri-Force: Cultivating Change, One Seed at a Time",
    cta: "Sow the Seeds of Change",
    link: "/get-involved",
  },
  {
    image: bgImage,
    title: "From Farm to Table, Youth Leading the Way",
    subtitle: "YAgrF: Growing a Sustainable Future for Kenya",
    cta: "Explore Our Impact",
    link: "/about#impact",
  },
  {
    image: brg2Image,
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
