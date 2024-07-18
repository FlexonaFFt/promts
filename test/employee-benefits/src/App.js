// src/App.js
import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import BenefitList from "./components/BenefitsList";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <BenefitList />
    </AppContainer>
  );
};

export default App;
