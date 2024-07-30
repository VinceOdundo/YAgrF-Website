import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
{
  /*import GetInvolvedPage from "./pages/GetInvolvedPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";*/
}

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #0d3c00;
    --secondary-color: #91b71f;
    --accent-color: #ffffff;
    --text-color: #000000;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: var(--text-color);
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <GlobalStyle />
        <Header />
        <MainContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/programs" component={ProgramsPage} />
            {/*  <Route path="/get-involved" component={GetInvolvedPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/contact" component={ContactPage} /> */}
          </Switch>
        </MainContent>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;
