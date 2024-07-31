import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Calendar, Search } from "lucide-react";
import blogImage from "../assets/brg.jpg";
import blogImage1 from "../assets/bg.png";
import blogImage2 from "../assets/brg2.jpg";

const NewsPageWrapper = styled.div`
  padding: 7rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 0.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background: transparent;
  color: var(--primary-color);

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--accent-color);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const NewsCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 20px 20px 60px #d0d0d0, -20px -20px 60px #ffffff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 25px 25px 75px #c1c1c1, -25px -25px 75px #ffffff;
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

const NewsTitle = styled.h2`
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
  color: var(--primary-color);
`;

const NewsLink = styled(Link)`
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  background: ${(props) =>
    props.active
      ? "linear-gradient(145deg, #e6e6e6, #ffffff)"
      : "linear-gradient(145deg, #ffffff, #e6e6e6)"};
  color: var(--primary-color);
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.active
      ? "inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff"
      : "5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff"};
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
  }
`;

const newsItems = [
  {
    id: 1,
    image: blogImage,
    title: "YAgrF Launches New Training Program for Young Farmers",
    date: "2024-07-15",
    excerpt:
      "Our latest initiative aims to equip 500 young Kenyans with sustainable farming skills over the next year.",
    link: "/news/new-training-program",
  },
  {
    id: 2,
    image: blogImage1,
    title: "Success Story: YAgrF Graduate Wins National Agripreneur Award",
    date: "2024-07-10",
    excerpt:
      "Jane Muthoni, a graduate of our Youth Agri-Force program, has been recognized for her innovative hydroponic farming methods.",
    link: "/news/graduate-wins-award",
  },
  {
    id: 3,
    image: blogImage2,
    title:
      "YAgrF Partners with Local Schools to Promote Agricultural Education",
    date: "2024-07-05",
    excerpt:
      "Our new partnership aims to introduce sustainable farming concepts to students from an early age.",
    link: "/news/school-partnership",
  },
  // Add more news items here...
];

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredNews = newsItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  const pageCount = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <NewsPageWrapper>
      <PageTitle>News & Blog</PageTitle>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <Search size={20} />
        </SearchButton>
      </SearchBar>
      <NewsGrid>
        {currentItems.map((item) => (
          <NewsCard key={item.id}>
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
      </NewsGrid>
      <Pagination>
        {[...Array(pageCount)].map((_, index) => (
          <PageButton
            key={index}
            active={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
    </NewsPageWrapper>
  );
};

export default NewsPage;
