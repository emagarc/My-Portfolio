import React, { useState, useEffect, createContext } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import TechAndSocial from "./components/TechAndSocial";
import styled from "styled-components";
import bg from "./public/images/Wallpapers/bg.jpeg";
import Stars from "./components/Stars";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  min-height: 100%;
  width: 100vw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  background: url(${bg});
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0;
`;

const DivStar = styled.div`
  position: fixed;
  background-image: url(${bg});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`;

const DivFather = styled.div`
  position: relative;
`;

//Definimos el contexto para compartir los datos de las estrellas
export const StarsContext = createContext([]);

// Definimos el componente StarsProvider que provee los datos de las estrellas
function StarsProvider({ children }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 500; i++) {
      newStars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <StarsContext.Provider value={stars}>{children}</StarsContext.Provider>
  );
}

function App() {
  return (
    <DivFather>
      <DivStar />
      <StarsProvider>
        <Container>
          <Hero />
          <Works />
          <TechAndSocial />
          <Contact />
        </Container>
        <Stars />
      </StarsProvider>
    </DivFather>
  );
}

export default App;
