import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CarouselContainer = styled.div`
  width: 800px;
  height: 550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #2c065d;
  border: 0.5px solid #da4ea2;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #da4ea2;
  z-index: 9999;
`;

const Description = styled.div`
  font-size: 1.2rem;
  margin-top: 20px; /* Espacio mediano */
  line-height: 1.5; /* Interlineado legible */
  text-align: justify; /* Texto justificado */
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  align-self: flex-start;
`;

const Button = styled.button`
  align-self: flex-start;
  box-shadow: inset 0px 0px 0px 2.5px rgba(0, 0, 0, 0.4);
  background-color: #da4ea2;
  color: whitesmoke;
  font-weight: 500;
  height: 35px;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;

  &:active {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

const HenryCinema = () => {
  return (
    <Container>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <Description>
        Henry Cinema is a web application created by a team of developers as
        part of their full-stack web developer course. The app allows users to
        purchase cinema tickets with ease, select showtimes, and buy
        complementary items like food and drinks. The app features a rating and
        commenting system for currently showing movies. Security and comfort are
        ensured with the use of the secure payment platform Mercado Pago. The
        intuitive user interface and efficient booking and purchasing system
        make for a hassle-free experience. The app also features an
        administrative panel for administrators to view app statistics and
        manage movies, functions, products, and comments. Overall, Henry Cinema
        offers a complete and personalized shopping experience for cinema-goers.
      </Description>
      <ButtonContainer>
        <a href="https://henry-cinemafront-production.up.railway.app/">
          <Button>Visit Website</Button>
        </a>
      </ButtonContainer>
    </Container>
  );
};

export default HenryCinema;
