import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import blogImage from "../assets/brg.jpg";
import blogImage1 from "../assets/bg.png";
import blogImage2 from "../assets/brg2.jpg";

const NewsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const NewsCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 1.5rem;
`;

const NewsTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const NewsDate = styled.div`
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const NewsExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const NewsLink = styled(Link)`
  display: inline-block;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color)
  );
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const newsItems = [
  {
    image: blogImage,
    title: "YAgrF Launches New Training Program for Young Farmers",
    date: "2024-07-15",
    excerpt:
      "Our latest initiative aims to equip 500 young Kenyans with sustainable farming skills over the next year.",
    link: "/news/new-training-program",
  },
  {
    image: blogImage1,
    title: "Success Story: YAgrF Graduate Wins National Agripreneur Award",
    date: "2024-07-10",
    excerpt:
      "Jane Muthoni, a graduate of our Youth Agri-Force program, has been recognized for her innovative hydroponic farming methods.",
    link: "/news/graduate-wins-award",
  },
  {
    image: blogImage2,
    title:
      "YAgrF Partners with Local Schools to Promote Agricultural Education",
    date: "2024-07-05",
    excerpt:
      "Our new partnership aims to introduce sustainable farming concepts to students from an early age.",
    link: "/news/school-partnership",
  },
];

const LatestNews = () => {
  return (
    <NewsWrapper>
      {newsItems.map((item, index) => (
        <NewsCard key={index}>
          <NewsImage src={item.image} alt={item.title} />
          <NewsContent>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsDate>
              <Calendar size={16} />
              {item.date}
            </NewsDate>
            <NewsExcerpt>{item.excerpt}</NewsExcerpt>
            <NewsLink to={item.link}>Read More</NewsLink>
          </NewsContent>
        </NewsCard>
      ))}
    </NewsWrapper>
  );
};

export default LatestNews;
