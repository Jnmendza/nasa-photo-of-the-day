import React from "react";
import "./App.css";
import Apod from './components/Apod';
import styled from 'styled-components';
import img from './design/background.jpg';

const AppContainer = styled.div`
  background-image: url(${img});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

function App() {
  return (
    <AppContainer>
      
      <Apod />
    </AppContainer>
  );
}

export default App;
