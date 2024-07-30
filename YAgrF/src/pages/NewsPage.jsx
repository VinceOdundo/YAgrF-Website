import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Calendar, Search } from "lucide-react";
import blogImage from "../assets/brg.jpg";
import blogImage1 from "../assets/bg.png";
import blogImage2 from "../assets/brg2.jpg";

const NewsPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid var(--secondary-color);
  border-radius: 5px 0 0 5px;
`;

const SearchButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--accent-color);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const NewsCard = styled.div`
  background-color: var(--accent-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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
`;

const NewsLink = styled(Link)`
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  background-color: ${(props) =>
    props.active ? "var(--secondary-color)" : "var(--accent-color)"};
  color: ${(props) =>
    props.active ? "var(--accent-color)" : "var(--primary-color)"};
  border: 1px solid var(--secondary-color);
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: var(--accent-color);
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
